const ts = require("typescript");
const fs = require("fs");
const path = require("path");
const { AssetCache } = require("@11ty/eleventy-cache-assets");
const crypto = require("crypto");
const slug = require("@11ty/eleventy/src/Filters/Slug");

const prettier = require("prettier");
const Linter = require("eslint").Linter;

const linter = new Linter();

linter.defineParser("@babel/eslint-parser", require("@babel/eslint-parser"));

// TODO move to data?
let eslintConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "..", ".eslintrc.json"), "utf8")
);

eslintConfig = {
  ...eslintConfig,
  rules: {
    ...eslintConfig.rules,
    "padding-line-between-statements": [
      1,
      {
        blankLine: "always",
        prev: [
          "block-like",
          "block",
          "class",
          "const",
          "do",
          "for",
          "function",
          "if",
          "let",
          "switch",
          "try",
          "while",
          "with",
        ],
        next: [
          "block-like",
          "block",
          "class",
          "do",
          "for",
          "function",
          "expression",
          "if",
          "switch",
          "try",
          "while",
          "with",
        ],
      },
      {
        blankLine: "always",
        prev: [
          "block-like",
          "block",
          "class",
          "do",
          "expression",
          "for",
          "function",
          "if",
          "switch",
          "try",
          "while",
          "with",
        ],
        next: ["const", "let"],
      },
      {
        blankLine: "always",
        prev: ["*"],
        next: ["function", "for"],
      },
    ],
  },
};


exports.compile = async ({ source, data }) => {
  const filePath = path.join(__dirname, "..", "samples", sample, "index.ts");

  const source = fs
    // TODO move this to data to improve caching?
    .readFileSync(filePath, "utf8");
  // .split("\n")
  // .slice(16, -1) // remove license header
  // .join("\n");

  const cache = new AssetCache(
    slug(crypto.createHash("sha256").update(source).digest("base64"))
  );

  if (cache.isCacheValid("*")) {
    return await cache.getCachedValue();
  }

  let output = ts
    .transpileModule(source, tsconfig)
    .outputText.replace(/export {([\w\d\s_,]*|\n)*};/g, "")
    .replace(/^.*PRESERVE_COMMENT_ABOVE.*\n?/gm, "")
    .trim();

  const endRegionTag = `// [END maps_${sample}]`;
  if (output.indexOf(endRegionTag) === -1) {
    output += `\n// [END maps_${sample}]\n`;
  }

  let messages;

  ({ messages, output } = linter.verifyAndFix(output, eslintConfig));

  if (messages.filter((m) => m.severity === 2).length > 0) {
    throw new Error(JSON.stringify({ messages, filePath }, null, 2));
  }

  // TODO fix this to run as part of eslint
  output = prettier.format(output, { parser: "babel" });
  await cache.save(output, "text");

  return output;
};

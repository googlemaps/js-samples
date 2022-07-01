const ts = require("typescript");
const fs = require("fs");
const path = require("path");

const prettier = require("prettier");
const Linter = require("eslint").Linter;

const linter = new Linter();

linter.defineParser(
  "@typescript-eslint/parser",
  require("@typescript-eslint/parser")
);

// TODO move to data
let eslintConfig = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "..", "..", "..", ".eslintrc.json"),
    "utf8"
  )
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

const compileTypescriptSample = async (source, data) => {
  let output = ts
    .transpileModule(source, { ...data.tsconfig, jsx: "preserve" })
    .outputText.replace(/export {([\w\d\s_,]*|\n)*};/g, "")
    .replace(/^.*PRESERVE_COMMENT_ABOVE.*\n?/gm, "")
    .trim();

  const startRegionTag = `// [START maps_${data.tag}]`;
  if (output.indexOf(startRegionTag) === -1) {
    const lines = output.split("\n");
    output = [...lines.slice(0, 5), startRegionTag, ...lines.slice(5)].join(
      "\n"
    );
  }

  const endRegionTag = `// [END maps_${data.tag}]`;
  if (output.indexOf(endRegionTag) === -1) {
    output += `\n// [END maps_${data.tag}]\n`;
  }

  let messages;

  let input = output;

  ({ messages, output } = linter.verifyAndFix(
    output,
    eslintConfig,
    data.page.outputPath
  ));

  if (messages.filter((m) => m.severity === 2).length > 0) {
    throw new Error(
      JSON.stringify(
        { input, messages, page: data.page, eslintConfig },
        null,
        2
      )
    );
  }

  // TODO fix this to run as part of eslint
  output = prettier.format(output, { quoteProps: "consistent", parser: "babel" });
  //   await cache.save(output, "text");

  return output;
};

module.exports = {
  outputFileExtension: "js",
  compile: async (inputContent) => {
    return async (data) => {
      switch (data.file) {
        case "app.ts":
        case "playground.ts":
        case "playground.tsx":
        case "app.tsx":
          return inputContent.replace(/^.*PRESERVE_COMMENT_ABOVE.*\n?/gm, "");
        default:
          return compileTypescriptSample(inputContent, data);
      }
    };
  },
  getData: async function () {
    return {
      tsconfig: JSON.parse(
        fs.readFileSync(
          path.join(__dirname, "..", "..", "..", "tsconfig.json"),
          "utf8"
        )
      ),
      file: ["docs.js", "app.ts", "jsfiddle.js", "playground.ts"],
      pagination: {
        data: "file",
        alias: "file",
        size: 1,
      },
    };
  },
  compileOptions: {
    permalink: function () {
      return (data) => {
        const [folder, ext] = data.file.split(".");

        return `/samples${data.page.filePathStem
          .split("/")
          .slice(0, 2)
          .join("/")}/${folder}/${
          data.file.startsWith("jsfiddle.") ? "demo" : "index"
        }.${ext}`;
      };
    },
  },
};

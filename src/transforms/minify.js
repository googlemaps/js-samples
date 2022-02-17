const createMinifier = require("dts-minify").createMinifier;
const ts = require("typescript");

// setup (provide a TS Compiler API object)
const minifier = createMinifier(ts);

module.exports = async function (content, outputPath) {
  if (outputPath.endsWith("index.d.ts")) {
    return minifier.minify(content, {});
  }
  return content;
};

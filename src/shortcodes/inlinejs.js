const path = require("path");
const { minify } = require("terser");
const fs = require("fs");

module.exports = (samplePath) => {
  const stylePath = path.join(
    __dirname,
    "..",
    "..",
    // TODO remove hard coded value for dist and use config
    "dist",
    samplePath,
    "index.js"
  );

  const code = fs.readFileSync(stylePath, "utf-8");
  return `<script>${code}</script>`;
};

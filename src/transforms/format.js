const path = require("path");
const prettier = require("prettier");

module.exports = function (content, outputPath) {
  if (!content) {
    return content;
  }

  if (["vite.config.js"].includes(path.basename(outputPath))) {
    return prettier.format(content, { parser: "babel" });
  }

  if (
    outputPath.match(/env\.d\.ts$/) ||
    outputPath.match(/playground\/index\.ts$/)
  ) {
    return prettier.format(content, { parser: "typescript" });
  }

  const ext = path.extname(outputPath);
  switch (ext) {
    case ".md":
      return prettier.format(content, { parser: "markdown" });
    case ".html":
      return prettier.format(content, { parser: "html" });
    case ".js": // done as part of an earlier step
    default:
      return content;
  }
};

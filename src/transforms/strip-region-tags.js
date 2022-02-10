const PATTERN = /^.*\[(START|END) [a-zA-Z_]*\].*\n?/gm;

module.exports = function (content, outputPath) {
  if (!/docs\//.test(outputPath)) {
    return content.replace(PATTERN, "");
  }
  return content;
};

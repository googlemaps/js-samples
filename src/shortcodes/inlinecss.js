const CleanCSS = require("clean-css");
const path = require("path");

module.exports = (samplePath) => {
  const stylePath = path.join(
    __dirname,
    "..",
    "..",
    // TODO remove hard coded value for dist and use config
    "dist",
    samplePath,
    "style.css"
  );
  const result = new CleanCSS({ inline: ["local"] }).minify([stylePath]);
  if (result.errors.length > 0 || result.warnings.length > 0) {
    throw new Error(
      `CleanCSS errors/warnings on file ${stylePath}:\n\n${[
        ...result.errors,
        ...result.warnings,
      ].join("\n")}`
    );
  }
  return `<style>${result.styles}</style>`;
};

const path = require("path");

module.exports = function (content, outputPath) {
  if (/playground\//.test(outputPath)) {
    const ext = path.extname(outputPath);

    switch (ext) {
      case ".js":
      case ".ts":
      case ".css":
        return content.replace(/\/\*\*\n.*@license\n.*\n.*\n \*\/(\n)*/gm, "");      
    }
  }
  return content;
};

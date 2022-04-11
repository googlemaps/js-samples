module.exports = function (content, outputPath) {
  if (!content) {
    return content;
  }

  if (/app\/index\.tsx?$/.test(outputPath)) {
    content = content.replace(
      /"YOUR_API_KEY"/g,
      "import.meta.env.VITE_GOOGLE_MAPS_API_KEY!"
    );
  }

  if (outputPath.endsWith("playground/index.ts")) {
    content = content.replace(
      /"YOUR_API_KEY"/g,
      "process.env.GOOGLE_MAPS_API_KEY!"
    );
  }
  return content;
};

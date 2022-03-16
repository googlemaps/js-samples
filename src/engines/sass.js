const sass = require("sass");

module.exports = {
  outputFileExtension: "js",
  compile: async () => {
    return async (data) => {
      return sass.compile(data.page.inputPath).css;
    };
  },
  getData: async function () {
    return {
      pagination: {
        data: "mode",
        alias: "mode",
        size: 1,
      },
    };
  },
  compileOptions: {
    permalink: function () {
      return (data) => {
        return `/samples${data.page.filePathStem
          .split("/")
          .slice(0, 2)
          .join("/")}/${data.mode}/${
          data.mode === "jsfiddle" ? "demo" : "style"
        }.css`;
      };
    },
  },
};

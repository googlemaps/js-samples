const path = require("path");

module.exports = async function (content, outputPath) {
  if (outputPath.match(/jsfiddle\/demo.js/)) {
    content = content.replace(
      /from "([a-zA-Z@]+.*?)";/g,
      (_, match) => `from "${skypackUrl(match)}";`
    );
  }
  return content;
};

const skypackUrl = (moduleName) => {
  let url = "https://cdn.skypack.dev/";

  let packageExport = null;
  let packageName = null;

  if (moduleName.match(/^@/)) {
    packageName = moduleName.split("/").slice(0, 2).join("/");
    packageExport = moduleName.split("/").slice(2).join("/");
  } else {
    packageName = moduleName.split("/")[0];
    packageExport = moduleName.split("/").slice(1).join("/");
  }

  url += packageName;

  // get version of module from package json
  const packageJson = require(path.join(__dirname, "..", "..", "package.json"));

  const version =
    packageJson.devDependencies[packageName] ??
    packageJson.dependencies[packageName];

  if (version) {
    url += `@${version}`;
  }

  if (packageExport) {
    url += `/${packageExport}`;
  }

  return url;
};

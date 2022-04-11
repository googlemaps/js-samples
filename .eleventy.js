require("dotenv").config();

const typescript = require("./src/engines/typescript/sample");
const typescriptJSX = require("./src/engines/typescript/sample-jsx");
const sass = require("./src/engines/sass");
const stripRegionTags = require("./src/transforms/strip-region-tags");
const stripLicenseHeaders = require("./src/transforms/strip-license-headers");
const yourAPIKey = require("./src/transforms/your-api-key");
const format = require("./src/transforms/format");
const minify = require("./src/transforms/minify");
const skypack = require("./src/transforms/skypack");
const fs = require("fs");
const path = require("path");
const vite = require("vite");
const chalk = require("chalk");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./shared/**/*");
  eleventyConfig.addWatchTarget(".env*");

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", sass);

  eleventyConfig.addTemplateFormats("ts");
  eleventyConfig.addExtension("ts", typescript);
  eleventyConfig.addTemplateFormats("tsx");
  eleventyConfig.addExtension("tsx", typescriptJSX);

  eleventyConfig.addTransform("yourAPIKey", yourAPIKey);
  eleventyConfig.addTransform("stripRegionTags", stripRegionTags);
  eleventyConfig.addTransform("stripLicenseHeaders", stripLicenseHeaders);
  eleventyConfig.addTransform("skypack", skypack);
  eleventyConfig.addTransform("minify", minify);
  eleventyConfig.addTransform("format", format);

  eleventyConfig.addCollection("samples_ts", function (collectionApi) {
    const samples = collectionApi.getFilteredByGlob("samples/*/index.ts*");

    if (samples.length === 0) {
      throw new Error("No samples found in samples collection");
    }

    return samples;
  });

  // build sample iframes after building the site using vite and a plugin to
  // inline assets such as css and js
  eleventyConfig.on("eleventy.after", async () => {
    console.log(chalk.green("[11ty.after] Building dist/samples/*/app"));

    const samplesPath = path.join(__dirname, "dist", "samples");

    // get samples in dist folder
    const samples = fs
      .readdirSync(samplesPath, {
        withFileTypes: true,
      })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    // remove warning https://stackoverflow.com/questions/8313628/node-js-request-how-to-emitter-setmaxlisteners
    require("events").EventEmitter.defaultMaxListeners = samples.length * 2;

    await Promise.all(
      samples.map((sample) =>
        vite.build({
          // vite automatically loads the config file from the root and merges
          // with the config specified here
          root: path.join(samplesPath, sample, "app"),
          base: "./",
          logLevel: "error",
          build: {
            target: "es2019",
          },
        })
      )
    );

    console.log(
      chalk.green("[11ty.after] Finished building dist/samples/*/app")
    );
  });

  return {
    dir: {
      input: "samples",
      layouts: "src/_layouts",
      output: "dist",
      data: "src/_data",
      includes: "src/_includes",
    },
  };
};

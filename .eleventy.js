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

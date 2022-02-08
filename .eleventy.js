require("dotenv").config();

const typescript = require("./src/engines/typescript/sample");
const sass = require("./src/engines/sass");
const stripRegionTags = require("./src/transforms/strip-region-tags");
const format = require("./src/transforms/format");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./shared/**/*");
  eleventyConfig.addWatchTarget(".env*");

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", sass);

  eleventyConfig.addTemplateFormats("ts");
  eleventyConfig.addExtension("ts", typescript);

  eleventyConfig.addTransform("stripRegionTags", stripRegionTags);
  eleventyConfig.addTransform("format", format);

  eleventyConfig.addCollection("samples_ts", function (collectionApi) {
    const samples = collectionApi.getFilteredByGlob("samples/*/index.ts");

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

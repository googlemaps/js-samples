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
const { rm } = require("fs/promises");

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
          plugins: [
            {
              name: "vite:iframe",
              transformIndexHtml: {
                enforce: "post",
                transform(html, ctx) {
                  if (!ctx || !ctx.bundle) return html;

                  for (const [, value] of Object.entries(ctx.bundle)) {
                    const o = value;
                    const a = value;
                    if (o.code) {
                      const reScript = new RegExp(
                        `<script type="module"[^>]*?src="[./]*${o.fileName}"[^>]*?></script>`
                      );
                      const code = `<script type="module">${o.code}</script>`;
                      html = html.replace(reScript, () => code);
                    } else if (a.fileName.endsWith(".css")) {
                      const reCSS = new RegExp(
                        `<link rel="stylesheet"[^>]*?href="[./]*${a.fileName}"[^>]*?>`
                      );
                      const code = `<style type="text/css">${a.source}</style>`;
                      html = html.replace(reCSS, () => code);
                    } else {
                      throw new Error(`asset not inlined: ${a.fileName}`);
                    }
                  }

                  return html;
                },
              },
            },
          ],
          root: path.join(samplesPath, sample, "app"),
          base: "./",
          logLevel: "error",
          build: {
            target: "es2015",
            assetsInlineLimit: 100000000,
            cssCodeSplit: false,
            outDir: path.join("../", "iframe"),
            rollupOptions: {
              inlineDynamicImports: true,
              output: {
                manualChunks: () => "everything.js",
              },
            },
          },
        })
      )
    );

    // remove assets directories since plugin inlined assets
    await Promise.all(
      samples.map((sample) =>
        rm(path.join(samplesPath, sample, "iframe", "assets"), {
          recursive: true,
          force: true,
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

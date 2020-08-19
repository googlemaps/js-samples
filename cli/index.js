#!/usr/bin/env node

const yargs = require("yargs");
const path = require("path");
const tar = require("tar");
const tmp = require("tmp");
const fs = require("fs");
const fetch = require("node-fetch");

const GITHUB_CONTENTS_API =
  "https://api.github.com/repos/googlemaps/js-samples/contents";

const getPackageFromRef = async (sample, ref, verbose) => {
  const url = `${GITHUB_CONTENTS_API}/dist/samples/${sample}/package.tgz?ref=${ref}`;
  if (verbose) {
    console.info(`Downloading: ${url}`);
  }
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.statusText}: ${url}`);
  }

  const data = await response.json();
  const tempFile = tmp.fileSync();
  fs.writeSync(tempFile.fd, Buffer.from(data.content, data.encoding));
  return tempFile.name;
};

const main = async argv => {
  const { sample, ref, destination, verbose } = argv;
  let file;

  if (ref) {
    file = await getPackageFromRef(sample, ref, verbose);
  } else {
    file = path.join(__dirname, "..", "dist", "samples", sample, "package.tgz");
  }

  if (verbose) {
    console.info(
      `Extracting sample skeleton application for '${sample}' into '${destination}'.`
    );
  }

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  await tar.x({
    file,
    C: destination,
    strict: true,
  });

  console.info(`Run the following to start the application:

$ cd '${destination}';
$ npm i;
$ npm run dev;`);
};

yargs
  .command(
    "init <sample> [destination]",
    "initialize a sample skeleton",
    yargs => {
      yargs.option("ref", {
        alias: "r",
        describe: "The git ref of git@github.com:googlemaps/js-samples.git",
        default: "master"
      }),
        yargs.positional("sample", {
          describe: "The sample identifier"
        });
      yargs.positional("destination", {
        describe: "The destination folder for the sample",
        default: "."
      });
    },
    main
  )
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging"
  }).argv;

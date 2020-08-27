#!/usr/bin/env node

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const yargs = require("yargs");
const path = require("path");
const tar = require("tar");
const tmp = require("tmp");
const fs = require("fs");
const fetch = require("node-fetch");
const npm = require("npm");
const openBrowser = require("open");

const getPackageFromTag = async (sample, tag, verbose) => {
  const url = `https://github.com/googlemaps/js-samples/releases/${
    tag === "latest" ? "latest/download" : `download/${tag}`
  }/${sample}-package.tgz`;

  if (verbose) {
    console.info(`Downloading: ${url}`);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.statusText}: ${url}`);
  }

  const tempFile = tmp.fileSync();
  fs.writeSync(tempFile.fd, await response.buffer());
  return tempFile.name;
};

const main = async argv => {
  const {
    sample,
    tag,
    destination,
    verbose,
    hot: shouldRun,
    open: shouldOpen
  } = argv;
  let file;

  if (tag) {
    file = await getPackageFromTag(sample, tag, verbose);
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
    strict: true
  });

  process.chdir(destination);

  if (shouldRun) {
    npm.load({}, () => {
      if (verbose) {
        console.info("Installing application via 'npm i'.");
      }
      npm.commands.install([""], () => {
        if (verbose) {
          console.info("Running application via 'npm run dev'.");
        }
        npm.commands["run-script"](["dev"]);
        if (shouldOpen) {
          if (verbose) {
            console.info("Opening application in browser.");
          }
          setTimeout(() => {
            openBrowser("http://localhost:8080");
          }, 1000);
        }
      });
    });
  }
};

yargs
  .command(
    "init <sample> [destination]",
    "initialize a sample skeleton",
    yargs => {
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
  })
  .option("hot", {
    type: "boolean",
    alias: "h",
    description: "Immediately install and run application",
    default: true
  })
  .option("open", {
    type: "boolean",
    alias: "o",
    description: "Open application in browser",
    default: true
  })
  .option("tag", {
    alias: "t",
    describe: "The target release of git@github.com:googlemaps/js-samples.git",
    default: "latest"
  }).argv;

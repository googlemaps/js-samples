/**
 * Copyright 2021 Google LLC
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

const fs = require("fs");
const sortPackageJson = require("sort-package-json");

function writeFile(file, data) {
  return fs.writeFileSync(file, data);
}

function stripWorkspace(dep) {
  return dep.replace("@npm//", "");
}

async function main(argv) {
  let { dependencies, devDependencies, name, out } = argv;

  const package = JSON.parse(fs.readFileSync(argv.root, "utf-8"));
  const allDependencies = {
    ...package.dependencies,
    ...package.devDependencies,
  };

  dependencies = dependencies.map(stripWorkspace);
  devDependencies = devDependencies.map(stripWorkspace);

  dependencies = Object.fromEntries(
    dependencies.map((d) => [d, allDependencies[d]])
  );

  devDependencies = Object.fromEntries(
    devDependencies.map((d) => [d, allDependencies[d]])
  );

  const { license, bugs, homepage, keywords } = package;

  const data = {
    license,
    bugs,
    homepage,
    name,
    keywords,
    version: "1.0.0",
    description: "Sample for Google Maps Platform JavaScript",
    author: "Justin Poehnelt <jpoehnelt@google.com>",
    scripts: {
      build: "webpack --config ./webpack.config.js --mode production",
      start: "webpack serve --config  ./webpack.config.js --mode development",
      dev: "webpack serve --config  ./webpack.config.js --mode development",
    },
  };

  // avoid churn in git since npm removes empty dependencies
  if (Object.keys(dependencies).length > 0) {
    data.dependencies = dependencies;
  }
  // avoid churn in git since npm removes empty dependencies
  if (Object.keys(devDependencies).length > 0) {
    data.devDependencies = devDependencies;
  }

  // console.log(data);

  writeFile(out, sortPackageJson(JSON.stringify(data, null, 2) + '\n'));
}

const argv = require("yargs")
  .option("dependencies", {
    type: "array",
  })
  .option("devDependencies", {
    type: "array",
    default: [],
  })
  .option("name", {
    type: "string",
    default: "google-maps-js-sample",
  })
  .option("out", {
    type: "string",
  })
  .option("root", {
    type: "string",
  }).argv;

main(argv);

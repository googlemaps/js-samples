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

import type { ProjectManifest } from "playground-elements/shared/worker-api";
import fs from "fs";
import { options } from "yargs";
const argv = options({
  ts: {
    type: "string",
    demandOption: true,
  },
  html: {
    type: "string",
    demandOption: true,
  },
  css: {
    type: "string",
    demandOption: true,
  },
  package: {
    type: "string",
    demandOption: true,
  },
  output: {
    type: "string",
    demandOption: true,
  },
}).argv;

const main = async (argv: any) => {
  console.log(argv);
  const manifest: ProjectManifest = { files: {}, importMap: {} };
  manifest.files!["index.ts"] = {
    content: fs
      .readFileSync(argv.ts, "utf8")
      .replace(/export {([\w\d\s_,]*|\n)*};/g, "")
      .split("\n")
      .slice(16, -1)
      .join("\n")
      .trim(),
  };
  manifest.files!["index.html"] = {
    content: fs.readFileSync(argv.html, "utf8").trim(),
  };
  manifest.files!["style.css"] = {
    content: fs.readFileSync(argv.css, "utf8").trim(),
  };

  const packageJson = JSON.parse(fs.readFileSync(argv.package, "utf8")) as any;
  packageJson.dependencies = packageJson.dependencies || {};

  Object.entries(packageJson.devDependencies).forEach(([k, v]) => {
    if (k.startsWith("@types/")) {
      packageJson.dependencies[k] = v;
    }
  });

  manifest.files!["package.json"] = {
    content: JSON.stringify(
      { dependencies: packageJson.dependencies },
      null,
      2
    ),
    hidden: false,
  };

  manifest.files!["index.d.ts"] = {
    content: fs.readFileSync(
      "external/npm/node_modules/@types/google.maps/index.d.ts",
      "utf8"
    ),
    hidden: true,
  };

  fs.writeFileSync(argv.output, JSON.stringify(manifest, null, 2));
};

main(argv);

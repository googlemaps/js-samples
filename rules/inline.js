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

var fs = require("fs");
var inline = require("web-resource-inliner");
var path = require("path");

function normalize(contents) {
  return process.platform === "win32"
    ? contents.replace(/\r\n/g, "\n")
    : contents;
}

function readFile(file) {
  return normalize(fs.readFileSync(file, "utf8"));
}

function writeFile(file, data) {
  return fs.writeFileSync(file, normalize(data));
}

async function main(args) {
  let src = args[2];
  let out = args[3];
  
  return new Promise((resolve, reject) => {
    inline.html(
      {
        fileContent: readFile(src),
        relativeTo: path.dirname(src),
        // only inline elements having data-inline
        scripts: false,
        images: false,
        links: false,
        svg: false,
      },
      function (err, result) {
        if (!err) {
          writeFile(out, result);
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
}

main(process.argv);

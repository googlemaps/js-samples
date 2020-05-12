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

const { diffStringsUnified, diffStringsRaw } = require("jest-diff");
var fs = require("fs");

function main(args) {
  const a = fs.readFileSync(args[2], "utf8");
  const b = fs.readFileSync(args[3], "utf8");

  const difference = diffStringsRaw(a, b).filter(diff => diff[0] !== 0);

  if (difference.length) {
    console.log(diffStringsUnified(a, b)); // kind of a hack to just get the printout
    process.exit(1);
  }
}

main(process.argv);

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

const expect = require("expect");
const { readFileSync } = require("fs");

const FORBIDDEN_PHRASES = [/PRESERVE_COMMENTS/gi];

function main(args) {
  const file = readFileSync(args[2], "utf8");
  FORBIDDEN_PHRASES.forEach((phrase) => {
    expect(file).not.toMatch(phrase);
  });
}

main(process.argv);

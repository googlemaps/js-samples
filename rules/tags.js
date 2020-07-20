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

const START = /\[START (.*) ?\]/g;
const END = /\[END (.*) ?\]/g;

function removeDuplicates(a) {
  return [...new Set(a)];
}

function main(args) {
  const a = readFileSync(args[2], "utf8");

  const startMatches = [...a.matchAll(START)].map(match => match[1]).sort();
  const startTags = removeDuplicates(startMatches).sort();

  const endMatches = [...a.matchAll(END)].map(match => match[1]).sort();
  const endTags = removeDuplicates(endMatches).sort();

  expect(startTags.length).toBeGreaterThan(0);

  // check tags match format
  for (const tag of [...startTags, ...endTags]) {
    expect(tag).toMatch(/maps_[a-zA-Z_]*$/);
  }

  // check for duplicates
  expect(startMatches).toEqual(startTags);
  expect(endMatches).toEqual(endTags);

  // check for matching start and end
  expect(startTags).toEqual(endTags);
}

main(process.argv);

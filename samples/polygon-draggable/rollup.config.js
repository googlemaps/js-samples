/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import stripBanner from "rollup-plugin-strip-banner";
import babel from "rollup-plugin-babel";
import license from "rollup-plugin-license";

const include = ["src/*.js", "src/*.ts"];

const plugins = [
  stripBanner({
    include: include
  }),
  license({
    sourcemap: true,
    banner: {
      content: {
        file: "../../LICENSE"
      }
    }
  })
];

const output = {
  format: "iife",
  extend: "window",
  name: "window",
  treeshake: false
};

export default [
  {
    input: "src/index.js",
    plugins: [
      ...plugins,
      babel({
        include: include,
        rootMode: "upward"
      })
    ],
    output: {
      file: "dist/app.compat.js",
      ...output
    }
  },
  {
    input: "src/index.js",
    plugins: plugins,
    output: {
      file: "dist/app.js",
      ...output
    }
  }
];

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
      file: "dist/index.compat.js",
      ...output
    }
  },
  {
    input: "src/index.js",
    plugins: plugins,
    output: {
      file: "dist/index.js",
      ...output
    }
  }
];

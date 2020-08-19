const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin()]
  }
});

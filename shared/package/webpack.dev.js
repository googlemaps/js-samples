const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  watch: true,
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    liveReload: true,
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
    writeToDisk: true,
    disableHostCheck: true,
  },
});

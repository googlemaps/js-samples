const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  entry: ["./src/index.ts"],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: "/",
    filename: "app.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new HtmlWebpackPlugin({
      template: "src/static/index.html",
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: "YOUR_API_KEY",
        replacement: process.env.GOOGLE_MAPS_API_KEY,
      },
    ]),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    liveReload: true,
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
    writeToDisk: true,
    disableHostCheck: true,
  },
};

const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");

module.exports = {
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
    filename: "app.min.js",
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new HtmlWebpackPlugin({ template: "src/static/index.html" }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: "YOUR_API_KEY",
        replacement: process.env.GOOGLE_MAPS_API_KEY,
      },
    ]),
  ],
};

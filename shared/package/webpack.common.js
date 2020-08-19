const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");

module.exports = {
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: "/",
    filename: "app.js",
    library: "",
    libraryTarget: "window"
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new HtmlWebpackPlugin({
      template: "static/index.html",
      inject: false
    }),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: "YOUR_API_KEY",
        replacement: process.env.GOOGLE_MAPS_API_KEY
      }
    ])
  ]
  
};

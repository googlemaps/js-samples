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

require("dotenv").config({});

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    entry: ["./src/index.ts"],
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          loader: "string-replace-loader",
          options: {
            search: /YOUR_API_KEY/g,
            replace: process.env.GOOGLE_MAPS_API_KEY,
          },
        },
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        },
        {
          test: /\.ts$/i,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      path: `${__dirname}/public`,
      publicPath: "/",
      filename: "index.js",
      libraryTarget: "window",
    },
    plugins: [].concat(
      env.SKIP_HTML
        ? []
        : [
            new HtmlWebpackPlugin({
              template: "src/index.html",
              inject: false,
            }),
            new HtmlReplaceWebpackPlugin([
              {
                pattern: /YOUR_API_KEY/g,
                replacement: process.env.GOOGLE_MAPS_API_KEY,
              },
            ]),
            new MiniCssExtractPlugin({
              filename: "style.css",
            }),
          ]
    ),
    devServer: {
      liveReload: true,
      host: "0.0.0.0",
      firewall: false,
      hot: false,
    },
    externals: {
      // use cdn version of ThreeJS to avoid tree shaking complexity
      three: "THREE",
    },
  };
};

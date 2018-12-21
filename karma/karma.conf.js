const { resolve } = require("path");
const {ProvidePlugin} = require("webpack");
const nodeExternals = require("webpack-node-externals");
const webpackLoaders = require("./../webpack/loaders.js");

module.exports = function(config) {
  const testEntry = "webpack.tests.js";

  config.set({
    basePath: "../",
    frameworks: ["jasmine"],
    browsers: ["Chrome"],
    plugins: [
      "karma-webpack",
      "karma-babel-preprocessor",
      "karma-phantomjs-launcher",
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-sourcemap-loader",
      "karma-sourcemap-writer",
      "karma-coverage",
      "karma-remap-istanbul"
    ],

    reporters: ["progress", "coverage", "karma-remap-istanbul"],

    preprocessors: {
      [testEntry]: ["webpack", "sourcemap", "sourcemap-writer", "coverage"]
    },

    mime: {
      "text/x-xhtml-javascript": ["jsx"]
    },

    files: [{ pattern: testEntry, watch: false }],

    webpack: {
      mode: "production",
      devtool: "inline-source-map",
      output: {
        path: "dist/",
        filename: "[name].js"
      },
      node: {
        fs: "empty"
      },
      module: {
        rules: webpackLoaders.concat([
          {
            enforce: "pre",
            test: /\.js$/,
            include: resolve("./src/"),
            loader: "istanbul-instrumenter"
          }
        ])
      }
    },

    coverageReporter: {
      type: "json",
      dir: "coverage/",
      subdir: ".",
      file: "coverage.json"
    },

    remapIstanbulReporter: {
      reports: {
        html: "coverage",
        json: "coverage/remapped.json"
      }
    },

    singleRun: false,

    stats: {
      colors: true,
      reasons: true
    },

    progress: true
  });
};

const { resolve } = require("path");
const webpackLoaders = require("./../webpack/loaders.js");
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  config.set({
    basePath: "../",
    frameworks: ["jasmine"],
    browsers: ["ChromeHeadless"],
    plugins: ["karma-webpack", "karma-chrome-launcher", "karma-jasmine"],
    singleRun: true,
    files: [
      { pattern: "tests/*spec.jsx", watched: false },
      { pattern: "tests/**/*spec.jsx", watched: false }
    ],

    preprocessors: {
      "tests/*spec.jsx": ["webpack"],
      "tests/**/*spec.jsx": ["webpack"]
    },

    webpack: {
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules|~/,
            loader: "babel-loader"
          }
        ]
      }
    },

    webpackMiddleware: {
      stats: "errors-only"
    }
  });
};

const webpack = require("webpack");

module.exports = {
  entry: {
    "dev-env": "./dev-env/index.jsx"
  },
  devtool: "eval-source-map",
  plugins: [new webpack.NoEmitOnErrorsPlugin(), new webpack.HotModuleReplacementPlugin()]
};

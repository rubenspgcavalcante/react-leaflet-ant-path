const path = require("path");
const rules = require("./webpack/loaders");
const envConfs = {
    development: require("./webpack/development"),
    production: require("./webpack/production")
};

const {NODE_ENV} = process.env;

let configuration = {
    devtool: "source-map",
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js",
        library: "react-leaflet-ant-path",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        contentBase: "dev-env",
        inline: true,
        hot: true
    },
    module: {
        rules
    }
};

if (!NODE_ENV) {
    throw {message: "Please define your NODE_ENV"};
}

configuration = {...configuration, ...envConfs[NODE_ENV]};
module.exports = configuration;
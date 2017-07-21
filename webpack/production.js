const {UglifyJsPlugin} = require("webpack").optimize;

module.exports = {
    entry: {
        "react-leaflet-ant-path": "./src/AntPath.jsx"
    },
    devtool: "source-map",
    externals: {
        "react": "react",
        "react-leaflet": "react-leaflet",
        "leaflet-ant-path": "leaflet-ant-path",
        "leaflet": {
            root: "L",
            commonjs: "leaflet",
            commonjs2: "leaflet",
            amd: "leaflet"
        }
    },
    plugins: [new UglifyJsPlugin({minimize: true, sourceMap: true})]
};
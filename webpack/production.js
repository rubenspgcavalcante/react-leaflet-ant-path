const {UglifyJsPlugin} = require("webpack").optimize;

module.exports = {
    entry: {
        "react-leaflet-ant-path": "./src/AntPath.jsx"
    },
    devtool: "source-map",
    externals: {
        "react": {
            root: "LeafletReact"
        },
        "react-leaflet": {
            root: "React"
        },
        "leaflet-ant-path": {
            root: "LeafletAntPath"
        },
        "leaflet": {
            root: "L",
            commonjs: "leaflet",
            commonjs2: "leaflet",
            amd: "leaflet"
        }
    },
    plugins: [new UglifyJsPlugin({minimize: true, sourceMap: true})]
};
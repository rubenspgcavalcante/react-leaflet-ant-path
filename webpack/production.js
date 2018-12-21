module.exports = {
  entry: {
    "react-leaflet-ant-path": "./src/index.js"
  },
  externals: {
    react: "react",
    "react-leaflet": "react-leaflet",
    "leaflet-ant-path": "leaflet-ant-path",
    leaflet: {
      root: "L",
      commonjs: "leaflet",
      commonjs2: "leaflet",
      amd: "leaflet"
    }
  },
  plugins: []
};

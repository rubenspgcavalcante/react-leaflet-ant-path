module.exports = {
  entry: {
    "react-leaflet-ant-path": "./src/AntPathContainer.jsx"
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

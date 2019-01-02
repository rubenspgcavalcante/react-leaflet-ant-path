# React Leaflet Ant Path

## *A port of Leaflet AntPath for React Leaflet* 
[Demo of the Leaflet AntPath](http://rubenspgcavalcante.github.io/leaflet-ant-path)  
[Original plugin](https://github.com/rubenspgcavalcante/leaflet-ant-path/)  

**Now supporting react-leaflet version 2!**

## Contributing
Want to help? Open a [issue](https://github.com/rubenspgcavalcante/react-leaflet-ant-path/issues) or make a PR!  
Also, see the guide on [how to contribute](/.github/contributing.md).

### Installing
Via NPM:
```
 npm install leaflet-ant-path react-leaflet-ant-path
```
Or Yarn
```
 yarn add leaflet-ant-path react-leaflet-ant-path
```

### Requirements
  - [leaflet](https://www.npmjs.com/package/leaflet) == v2
  - [react](https://www.npmjs.com/package/react) >= v16.3
  - [react-leaflet](https://www.npmjs.com/package/react-leaflet) == v2
  - [leaflet-ant-path](https://www.npmjs.com/package/leaflet-ant-path) >= v1.1.2
    

### Using the plugin
The AntPath component is exported by default:  

```jsx
    import AntPath from "react-leaflet-ant-path";

    // ...
    <AntPath positions={latLngs} options={antPathOptions} />    
```

### Update: Using more Vectors
On this version you now can use diferent vector other than polyline, passing the **factory** to the **option.use**.
Currently tested support:
 - [L.curve](https://github.com/elfalem/Leaflet.curve)
 - [L.polygon](https://leafletjs.com/reference-1.3.4.html#polygon)
 - [L.rectangle](https://leafletjs.com/reference-1.3.4.html#rectangle)
 - [L.circle](https://leafletjs.com/reference-1.3.4.html#circle)

```javascript
// Using a polygon
const antPolygon = antPath([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
], { use: L.polygon, fillColor: "red" });

// Using a circle
const antCircle = antPath(
  [51.508, -0.11],
  {
    use: L.circle
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }
);

// Using a curve (Leaflet.curve plugin)
const antCurve = antPath([
  "M",
  [50.54136296522163, 28.520507812500004],
  
  "C",
  [52.214338608258224, 28.564453125000004],
  [48.45835188280866, 33.57421875000001],
  [50.680797145321655, 33.83789062500001],
  
  "V",
  [48.40003249610685],
  
  "L",
  [47.45839225859763, 31.201171875],
  [48.40003249610685, 28.564453125000004],
  
  "Z"
  ],
  {use: L.curve, color: "red", fill: true })
```

### Parameters
The same as the original plugin.

| name                        | type                                      | example                               | description                                                                                                                                              |
| --------------------------- | ----------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| latlngs                     | L.LatLng[] **or** Array\[number, number\] | \[ \[0, 10\], \[-20, 0\], ... \]      | A path (depends on vector used, default as in [polyline constructor](http://leafletjs.com/reference.html#polyline) )                                     |
| options                     | Object                                    | {color: 'red', weight: 5, ...}        | Same as the vector choosen (default to [polyline](http://leafletjs.com/reference.html#polyline-options) ) plus the **extra** options bellow              |
| options.use                 | Vector Layer factory                      | Vector to use (default to L.polyline) | The vector to enhance with the ant-path animation ([check the compatibilty](#update-using-more-vectors))                                                 |
| options.paused              | boolean                                   | true/false                            | Starts with the animation paused (default: false)                                                                                                        |
| options.reverse             | boolean                                   | true/false                            | Defines if the flow follows or not the path order                                                                                                        |
| options.hardwareAccelerated | boolean                                   | true/false                            | Makes the animation run with hardware acceleration (default: false)                                                                                      |
| options.pulseColor          | string                                    | #FF00FF                               | Adds a color to the dashed flux (default: 'white')                                                                                                       |
| options.delay               | string                                    | 120                                   | Add a delay to the animation flux (default: 400)                                                                                                         |
| options.dashArray           | [number, number] **or** string            | [15, 30]                              | The size of the animated dashes (default: "10, 20"). See also [the pattern](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) |

### License
This project is under the [MIT LICENSE](http://opensource.org/licenses/MIT)
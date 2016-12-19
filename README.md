# ol3-epsg28992

Adds support for the EPSG:28992 / RD New projection to Openlayers 3. This plugin works for all versions of Openlayers 3.

## Usage

Load [proj4js](http://proj4js.org/) and `epsg28992.js` in that order into your project. The projection code `'EPSG:28992'` now becomes available in Openlayers. 
 
### Loading GeoJSON features in EPSG:28992

Openlayers will now convert GeoJSON (or any other format) written in EPSG:28992 to whatever projection you define.

```javascript
var features = ol.format.GeoJSON().readFeatures(geojson, {
    dataProjection: 'EPSG:28992',
    featureProjection: 'EPSG:3857' // Default ol.View projection
});
```

Note: if you use `defaultDataProjection` on your format, Openlayers will try to extract the projection from the data source first. Different GIS application output different projection notations, and this plugin may not support them all. If you come across an unsupported notation, feel free to submit a pull request with the new name added to the `names` array.

### Tilegrid

The tilegrid for WMTS used by most Dutch geodata providers is included as well with `ol.tilegrid.EPSG28992`.

```javascript
var brtLayer = new ol.layer.Tile({
    source: new ol.source.WMTS({
        url: 'https://geodata.nationaalgeoregister.nl/wmts/brtachtergrondkaart?',
        layer: 'brtachtergrondkaart',
        format: 'image/png',
        style: 'default',
        matrixSet: 'EPSG:28992',
        tileGrid: ol.tilegrid.EPSG28992
    })
});
```
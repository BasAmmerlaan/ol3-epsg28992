(function () {
    var proj4 = ol.proj.proj4.get();

    if (typeof proj4 !== 'function')
        throw new TypeError('The proj4js library is not loaded. See https://openlayers.org/en/latest/apidoc/ol.proj.html#.setProj4');

    var names = [
        'EPSG:28992',
        'urn:ogc:def:crs:EPSG::28992'
    ];

    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        proj4.defs(name, '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.417,50.3319,465.552,-0.398957,0.343988,-1.8774,4.0725 +units=m +no_defs');
        ol.proj.get(name).setExtent([-285401.92, 22598.08, 595401.92, 903401.92]);
    }

    var epsg28992 = ol.proj.get('EPSG:28992');

    ol.tilegrid.EPSG28992 = new ol.tilegrid.WMTS({
        extent: epsg28992.getExtent(),
        origin: ol.extent.getTopLeft(epsg28992.getExtent()),
        resolutions: [3440.64, 1720.32, 860.16, 430.08, 215.04, 107.52, 53.76, 26.88, 13.44, 6.72, 3.36, 1.68, 0.84, 0.42, 0.21],
        matrixIds: ['EPSG:28992:0', 'EPSG:28992:1', 'EPSG:28992:2', 'EPSG:28992:3', 'EPSG:28992:4', 'EPSG:28992:5', 'EPSG:28992:6', 'EPSG:28992:7', 'EPSG:28992:8', 'EPSG:28992:9', 'EPSG:28992:10', 'EPSG:28992:11', 'EPSG:28992:12', 'EPSG:28992:13', 'EPSG:28992:14']
    });
}());
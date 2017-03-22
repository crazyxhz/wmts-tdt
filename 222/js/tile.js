define(["esri/layers/TiledMapServiceLayer", 'dojo/_base/declare', "esri/layers/TileInfo"], function (TiledMapServiceLayer, declare, TileInfo) {
    return declare(TiledMapServiceLayer, {
        constructor: function () {
            this.spatialReference = new esri.SpatialReference({wkid: 4490});
            this.initialExtent = (this.fullExtent = new esri.geometry.Extent(109.30838384299625, 28.08149124374876, 116.13251063222901, 34.273006020051355, this.spatialReference));

            this.tileInfo = new TileInfo({
                "dpi": 96,
                "rows": 256,
                "cols": 256,
                "compressionQuality": 0,
                "origin": {
                    "x": -180,
                    "y": 90
                },
                "spatialReference": {
                    "wkid": 4490
                },
                "lods": [
                    // {"level": 1, "resolution": 0.7031249999891485, "scale": 2.958293554545656E8},
                    // {"level": 2, "resolution": 0.35156249999999994, "scale": 1.479146777272828E8},
                    // {"level": 3, "resolution": 0.17578124999999997, "scale": 7.39573388636414E7},
                    // {"level": 4, "resolution": 0.08789062500000014, "scale": 3.69786694318207E7},
                    // {"level": 5, "resolution": 0.04394531250000007, "scale": 1.848933471591035E7},
                    // {"level": 6, "resolution": 0.021972656250000007, "scale": 9244667.357955175},
                    {"level": 6, "resolution": 0.01098632812500002, "scale": 4622333.678977588},
                    {"level": 7, "resolution": 0.00549316406250001, "scale": 2311166.839488794},
                    {"level": 8, "resolution": 0.0027465820312500017, "scale": 1155583.419744397},
                    {"level": 9, "resolution": 0.0013732910156250009, "scale": 577791.7098721985},
                    {"level": 10, "resolution": 0.000686645507812499, "scale": 288895.85493609926},
                    {"level": 11, "resolution": 0.0003433227539062495, "scale": 144447.92746804963},
                    {"level": 12, "resolution": 0.00017166137695312503, "scale": 72223.96373402482},
                    {"level": 13, "resolution": 0.00008583068847656251, "scale": 36111.98186701241},
                    {"level": 14, "resolution": 0.000042915344238281406, "scale": 18055.990933506204},
                    {"level": 15, "resolution": 0.000021457672119140645, "scale": 9027.995466753102},
                    {"level": 16, "resolution": 0.000010728836059570307, "scale": 4513.997733376551}
                    // {"level": 18, "resolution": 0.000005364418029785169, "scale": 2256.998866688275},
                    // {"level": 19, "resolution": 2.68220901485e-6, "scale": 1128.499433344138},
                    // {"level": 20, "resolution": 1.341104507425e-6, "scale": 564.2497166720688}
                ]
            })
            this.url = 'http://www.tiandituhubei.com:6080/arcgis/rest/services/IMG_ZY3_HB/MapServer/tile'
            this.loaded = true;
            this.onLoad(this);
        },
        getTileUrl: function (level, row, col) {
            return this.url + '/' + level + '/' + row + '/' + col
        }

    })
})
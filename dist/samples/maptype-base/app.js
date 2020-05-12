(function(exports) {
  "use strict";

  /*
   * Copyright 2019 Google LLC. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * This demo demonstrates how to replace default map tiles with custom imagery.
   * In this case, the CoordMapType displays gray tiles annotated with the tile
   * coordinates.
   *
   * Try panning and zooming the map to see how the coordinates change.
   */

  /**
   * @constructor
   * @implements {google.maps.MapType}
   */
  function CoordMapType(tileSize) {
    this.tileSize = tileSize;
  }

  CoordMapType.prototype.maxZoom = 19;
  CoordMapType.prototype.name = "Tile #s";
  CoordMapType.prototype.alt = "Tile Coordinate Map Type";

  CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
    var div = ownerDocument.createElement("div");
    div.innerHTML = coord;
    div.style.width = this.tileSize.width + "px";
    div.style.height = this.tileSize.height + "px";
    div.style.fontSize = "10";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px";
    div.style.borderColor = "#AAAAAA";
    div.style.backgroundColor = "#E5E3DF";
    return div;
  };

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: {
        lat: 41.85,
        lng: -87.65
      },
      streetViewControl: false,
      mapTypeId: "coordinate",
      mapTypeControlOptions: {
        mapTypeIds: ["coordinate", "roadmap"],
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    });
    map.addListener("maptypeid_changed", function() {
      var showStreetViewControl = map.getMapTypeId() !== "coordinate";
      map.setOptions({
        streetViewControl: showStreetViewControl
      });
    }); // Now attach the coordinate map type to the map's registry.

    map.mapTypes.set(
      "coordinate",
      new CoordMapType(new google.maps.Size(256, 256))
    );
  }

  exports.CoordMapType = CoordMapType;
  exports.initMap = initMap;
})((this.window = this.window || {}));

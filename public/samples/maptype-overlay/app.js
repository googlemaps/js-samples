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
   * This demo illustrates the coordinate system used to display map tiles in the
   * API.
   *
   * Tiles in Google Maps are numbered from the same origin as that for
   * pixels. For Google's implementation of the Mercator projection, the origin
   * tile is always at the northwest corner of the map, with x values increasing
   * from west to east and y values increasing from north to south.
   *
   * Try panning and zooming the map to see how the coordinates change.
   */

  /** @constructor */
  function CoordMapType(tileSize) {
    this.tileSize = tileSize;
  }

  CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
    var div = ownerDocument.createElement("div");
    div.innerHTML = coord;
    div.style.width = this.tileSize.width + "px";
    div.style.height = this.tileSize.height + "px";
    div.style.fontSize = "10";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px";
    div.style.borderColor = "#AAAAAA";
    return div;
  };

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 41.85, lng: -87.65 }
    });

    // Insert this overlay map type as the first overlay map type at
    // position 0. Note that all overlay map types appear on top of
    // their parent base map.
    map.overlayMapTypes.insertAt(
      0,
      new CoordMapType(new google.maps.Size(256, 256))
    );
  }

  exports.CoordMapType = CoordMapType;
  exports.initMap = initMap;
})((this.window = this.window || {}));

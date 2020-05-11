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

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: {
        lat: -33.865427,
        lng: 151.196123
      },
      mapTypeId: "terrain"
    }); // Create a <script> tag and set the USGS URL as the source.

    var script = document.createElement("script"); // This example uses a local copy of the GeoJSON stored at
    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp

    script.src =
      "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function eqfeed_callback(results) {
    var heatmapData = [];

    for (var i = 0; i < results.features.length; i++) {
      var coords = results.features[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1], coords[0]);
      heatmapData.push(latLng);
    }

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      dissipating: false,
      map: exports.map
    });
  }

  exports.eqfeed_callback = eqfeed_callback;
  exports.initMap = initMap;
})((this.window = this.window || {}));

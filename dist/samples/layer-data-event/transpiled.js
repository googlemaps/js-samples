require("core-js/modules/es.array.map");

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
      zoom: 4,
      center: {
        lat: -28,
        lng: 137
      }
    }); // Load GeoJSON.

    exports.map.data.loadGeoJson(
      "https://storage.googleapis.com/maps-devrel/google.json"
    ); // Add some style.

    exports.map.data.setStyle(function(feature) {
      return (
        /** @type {google.maps.Data.StyleOptions} */
        ({
          fillColor: feature.getProperty("color"),
          strokeWeight: 1
        })
      );
    }); // Set mouseover event for each feature.

    exports.map.data.addListener("mouseover", function(event) {
      document.getElementById(
        "info-box"
      ).textContent = event.feature.getProperty("letter");
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

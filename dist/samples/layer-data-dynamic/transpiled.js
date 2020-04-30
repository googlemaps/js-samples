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
      "https://storage.googleapis.com/mapsdevsite/json/google.json"
    ); // Color each letter gray. Change the color when the isColorful property
    // is set to true.

    exports.map.data.setStyle(function(feature) {
      var color = "gray";

      if (feature.getProperty("isColorful")) {
        color = feature.getProperty("color");
      }

      return (
        /** @type {!google.maps.Data.StyleOptions} */
        ({
          fillColor: color,
          strokeColor: color,
          strokeWeight: 2
        })
      );
    }); // When the user clicks, set 'isColorful', changing the color of the letters.

    exports.map.data.addListener("click", function(event) {
      event.feature.setProperty("isColorful", true);
    }); // When the user hovers, tempt them to click by outlining the letters.
    // Call revertStyle() to remove all overrides. This will use the style rules
    // defined in the function passed to setStyle()

    exports.map.data.addListener("mouseover", function(event) {
      exports.map.data.revertStyle();
      exports.map.data.overrideStyle(event.feature, {
        strokeWeight: 8
      });
    });
    exports.map.data.addListener("mouseout", function(event) {
      exports.map.data.revertStyle();
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

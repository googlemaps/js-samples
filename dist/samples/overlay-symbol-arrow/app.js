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
  // This example adds a predefined symbol (an arrow) to a polyline.
  // Setting offset to 100% places the arrow at the end of the line.
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: {
        lat: 20.291,
        lng: 153.027
      },
      mapTypeId: "terrain"
    }); // Define a symbol using a predefined path (an arrow)
    // supplied by the Google Maps JavaScript API.

    var lineSymbol = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
    }; // Create the polyline and add the symbol via the 'icons' property.

    var line = new google.maps.Polyline({
      path: [
        {
          lat: 22.291,
          lng: 153.027
        },
        {
          lat: 18.291,
          lng: 153.027
        }
      ],
      icons: [
        {
          icon: lineSymbol,
          offset: "100%"
        }
      ],
      map: map
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

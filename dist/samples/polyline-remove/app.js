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

  // This example adds a UI control allowing users to remove the polyline from the
  // map.

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 0, lng: -180 },
      mapTypeId: "terrain"
    });

    var flightPathCoordinates = [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 }
    ];

    exports.flightPath = new google.maps.Polyline({
      path: flightPathCoordinates,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    addLine();
  }

  function addLine() {
    exports.flightPath.setMap(exports.map);
  }

  function removeLine() {
    exports.flightPath.setMap(null);
  }

  exports.addLine = addLine;
  exports.initMap = initMap;
  exports.removeLine = removeLine;
})((this.window = this.window || {}));

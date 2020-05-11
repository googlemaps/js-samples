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
  // This example creates a simple polygon representing the Bermuda Triangle.
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: {
        lat: 24.886,
        lng: -70.268
      },
      mapTypeId: "terrain"
    }); // Define the LatLng coordinates for the polygon's path.

    var triangleCoords = [
      {
        lat: 25.774,
        lng: -80.19
      },
      {
        lat: 18.466,
        lng: -66.118
      },
      {
        lat: 32.321,
        lng: -64.757
      },
      {
        lat: 25.774,
        lng: -80.19
      }
    ]; // Construct the polygon.

    var bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

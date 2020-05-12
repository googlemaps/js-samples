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
  // This example requires the Geometry library. Include the libraries=geometry
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">
  var marker2;
  var geodesicPoly;

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: 34,
        lng: -40.605
      }
    });
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      document.getElementById("info")
    );
    exports.marker1 = new google.maps.Marker({
      map: map,
      draggable: true,
      position: {
        lat: 40.714,
        lng: -74.006
      }
    });
    marker2 = new google.maps.Marker({
      map: map,
      draggable: true,
      position: {
        lat: 48.857,
        lng: 2.352
      }
    });
    var bounds = new google.maps.LatLngBounds(
      exports.marker1.getPosition(),
      marker2.getPosition()
    );
    map.fitBounds(bounds);
    google.maps.event.addListener(exports.marker1, "position_changed", update);
    google.maps.event.addListener(marker2, "position_changed", update);
    exports.poly = new google.maps.Polyline({
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 3,
      map: map
    });
    geodesicPoly = new google.maps.Polyline({
      strokeColor: "#CC0099",
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true,
      map: map
    });
    update();
  }

  function update() {
    var path = [exports.marker1.getPosition(), marker2.getPosition()];
    exports.poly.setPath(path);
    geodesicPoly.setPath(path);
    var heading = google.maps.geometry.spherical.computeHeading(
      path[0],
      path[1]
    );
    document.getElementById("heading").value = heading;
    document.getElementById("origin").value = path[0].toString();
    document.getElementById("destination").value = path[1].toString();
  }

  exports.initMap = initMap;
  exports.update = update;
})((this.window = this.window || {}));

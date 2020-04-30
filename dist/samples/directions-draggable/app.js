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
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: -24.345, lng: 134.46 } // Australia.
    });

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map: map,
      panel: document.getElementById("right-panel")
    });

    directionsRenderer.addListener("directions_changed", function() {
      computeTotalDistance(directionsRenderer.getDirections());
    });

    displayRoute(
      "Perth, WA",
      "Sydney, NSW",
      directionsService,
      directionsRenderer
    );
  }

  function displayRoute(origin, destination, service, display) {
    service.route(
      {
        origin: origin,
        destination: destination,
        waypoints: [
          { location: "Adelaide, SA" },
          { location: "Broken Hill, NSW" }
        ],
        travelMode: "DRIVING",
        avoidTolls: true
      },
      function(response, status) {
        if (status === "OK") {
          display.setDirections(response);
        } else {
          alert("Could not display directions due to: " + status);
        }
      }
    );
  }

  function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    document.getElementById("total").innerHTML = total + " km";
  }

  exports.computeTotalDistance = computeTotalDistance;
  exports.displayRoute = displayRoute;
  exports.initMap = initMap;
})((this.window = this.window || {}));

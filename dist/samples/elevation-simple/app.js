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
      zoom: 8,
      center: {
        lat: 63.333,
        lng: -150.5
      },
      // Denali.
      mapTypeId: "terrain"
    });
    var elevator = new google.maps.ElevationService();
    var infowindow = new google.maps.InfoWindow({
      map: map
    }); // Add a listener for the click event. Display the elevation for the LatLng of
    // the click inside the infowindow.

    map.addListener("click", function(event) {
      displayLocationElevation(event.latLng, elevator, infowindow);
    });
  }

  function displayLocationElevation(location, elevator, infowindow) {
    // Initiate the location request
    elevator.getElevationForLocations(
      {
        locations: [location]
      },
      function(results, status) {
        infowindow.setPosition(location);

        if (status === "OK") {
          // Retrieve the first result
          if (results[0]) {
            // Open the infowindow indicating the elevation at the clicked position.
            infowindow.setContent(
              "The elevation at this point <br>is " +
                results[0].elevation +
                " meters."
            );
          } else {
            infowindow.setContent("No results found");
          }
        } else {
          infowindow.setContent("Elevation service failed due to: " + status);
        }
      }
    );
  }

  exports.displayLocationElevation = displayLocationElevation;
  exports.initMap = initMap;
})((this.window = this.window || {}));

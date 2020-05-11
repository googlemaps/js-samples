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
  // Initialize the map.
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: {
        lat: 40.72,
        lng: -73.96
      }
    });
    var geocoder = new google.maps.Geocoder();
    var infowindow = new google.maps.InfoWindow();
    document.getElementById("submit").addEventListener("click", function() {
      geocodePlaceId(geocoder, map, infowindow);
    });
  } // This function is called when the user clicks the UI button requesting
  // a geocode of a place ID.

  function geocodePlaceId(geocoder, map, infowindow) {
    var placeId = document.getElementById("place-id").value;
    geocoder.geocode(
      {
        placeId: placeId
      },
      function(results, status) {
        if (status === "OK") {
          if (results[0]) {
            map.setZoom(11);
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            infowindow.setContent(results[0].formatted_address);
            infowindow.open(map, marker);
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }

  exports.geocodePlaceId = geocodePlaceId;
  exports.initMap = initMap;
})((this.window = this.window || {}));

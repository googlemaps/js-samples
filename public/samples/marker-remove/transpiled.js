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
  // In the following example, markers appear when the user clicks on the map.
  // The markers are stored in an array.
  // The user can then click an option to hide, show or delete the markers.

  exports.markers = [];

  function initMap() {
    var haightAshbury = {
      lat: 37.769,
      lng: -122.446
    };
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: haightAshbury,
      mapTypeId: "terrain"
    }); // This event listener will call addMarker() when the map is clicked.

    exports.map.addListener("click", function(event) {
      addMarker(event.latLng);
    }); // Adds a marker at the center of the map.

    addMarker(haightAshbury);
  } // Adds a marker to the map and push to the array.

  function addMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: exports.map
    });
    exports.markers.push(marker);
  } // Sets the map on all markers in the array.

  function setMapOnAll(map) {
    for (var i = 0; i < exports.markers.length; i++) {
      exports.markers[i].setMap(map);
    }
  } // Removes the markers from the map, but keeps them in the array.

  function clearMarkers() {
    setMapOnAll(null);
  } // Shows any markers currently in the array.

  function showMarkers() {
    setMapOnAll(exports.map);
  } // Deletes all markers in the array by removing references to them.

  function deleteMarkers() {
    clearMarkers();
    exports.markers = [];
  }

  exports.addMarker = addMarker;
  exports.clearMarkers = clearMarkers;
  exports.deleteMarkers = deleteMarkers;
  exports.initMap = initMap;
  exports.setMapOnAll = setMapOnAll;
  exports.showMarkers = showMarkers;
})((this.window = this.window || {}));

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

  /*
   * Click the map to set a new location for the Street View camera.
   */

  function initMap() {
    var berkeley = {
      lat: 37.869085,
      lng: -122.254775
    };
    var sv = new google.maps.StreetViewService();
    exports.panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano")
    ); // Set up the map.

    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: berkeley,
      zoom: 16,
      streetViewControl: false
    }); // Set the initial Street View camera to the center of the map

    sv.getPanorama(
      {
        location: berkeley,
        radius: 50
      },
      processSVData
    ); // Look for a nearby Street View panorama when the map is clicked.
    // getPanorama will return the nearest pano when the given
    // radius is 50 meters or less.

    exports.map.addListener("click", function(event) {
      sv.getPanorama(
        {
          location: event.latLng,
          radius: 50
        },
        processSVData
      );
    });
  }

  function processSVData(data, status) {
    if (status === "OK") {
      var marker = new google.maps.Marker({
        position: data.location.latLng,
        map: exports.map,
        title: data.location.description
      });
      exports.panorama.setPano(data.location.pano);
      exports.panorama.setPov({
        heading: 270,
        pitch: 0
      });
      exports.panorama.setVisible(true);
      marker.addListener("click", function() {
        var markerPanoID = data.location.pano; // Set the Pano to use the passed panoID.

        exports.panorama.setPano(markerPanoID);
        exports.panorama.setPov({
          heading: 270,
          pitch: 0
        });
        exports.panorama.setVisible(true);
      });
    } else {
      console.error("Street View data not found for this location.");
    }
  }

  exports.initMap = initMap;
  exports.processSVData = processSVData;
})((this.window = this.window || {}));

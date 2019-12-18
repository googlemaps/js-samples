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
      zoom: 11,
      center: { lat: 35.6894, lng: 139.692 },
      mapTypeId: "hybrid"
    });

    exports.infoWindow = new google.maps.InfoWindow();

    exports.maxZoomService = new google.maps.MaxZoomService();

    exports.map.addListener("click", showMaxZoom);
  }

  function showMaxZoom(e) {
    exports.maxZoomService.getMaxZoomAtLatLng(e.latLng, function(response) {
      if (response.status !== "OK") {
        exports.infoWindow.setContent("Error in MaxZoomService");
      } else {
        exports.infoWindow.setContent(
          "The maximum zoom at this location is: " + response.zoom
        );
      }
      exports.infoWindow.setPosition(e.latLng);
      exports.infoWindow.open(exports.map);
    });
  }

  exports.initMap = initMap;
  exports.showMaxZoom = showMaxZoom;
})((this.window = this.window || {}));

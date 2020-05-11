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
  // This example creates a rectangle based on the viewport
  // on any 'zoom-changed' event.
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: {
        lat: 40.74852,
        lng: -73.981687
      },
      mapTypeId: "terrain"
    });
    var rectangle = new google.maps.Rectangle();
    map.addListener("zoom_changed", function() {
      // Get the current bounds, which reflect the bounds before the zoom.
      rectangle.setOptions({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map,
        bounds: map.getBounds()
      });
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

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

  /**
   * @fileoverview Sample showing capturing a KML file click
   *   and displaying the contents in a side panel instead of
   *   an InfoWindow
   */
  // [START maps_kml_map]

  var src =
    "https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml";

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: new google.maps.LatLng(-19.257753, 146.823688),
      zoom: 2,
      mapTypeId: "terrain"
    });
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: exports.map
    });
    kmlLayer.addListener("click", function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById("capture");
      testimonial.innerHTML = content;
    });
  } // [END maps_kml_map]

  exports.initMap = initMap;
  exports.src = src;
})((this.window = this.window || {}));

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

  var NEW_ZEALAND_BOUNDS = {
    north: -34.36,
    south: -47.35,
    west: 166.28,
    east: -175.81
  };
  var AUCKLAND = {
    lat: -37.06,
    lng: 174.58
  };

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: AUCKLAND,
      restriction: {
        latLngBounds: NEW_ZEALAND_BOUNDS,
        strictBounds: false
      },
      zoom: 7
    });
  }

  exports.AUCKLAND = AUCKLAND;
  exports.NEW_ZEALAND_BOUNDS = NEW_ZEALAND_BOUNDS;
  exports.initMap = initMap;
})((this.window = this.window || {}));

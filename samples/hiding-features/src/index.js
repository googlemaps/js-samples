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

// [START maps_hiding_features_script_body]
export var map;
export function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.86, lng: 151.209 },
    zoom: 13,
    mapTypeControl: false
  });

  // Add controls to the map, allowing users to hide/show features.
  var styleControl = document.getElementById("style-selector-control");
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

  // Apply new JSON when the user chooses to hide/show features.
  document.getElementById("hide-poi").addEventListener("click", function() {
    map.setOptions({ styles: styles["hide"] });
  });
  document.getElementById("show-poi").addEventListener("click", function() {
    map.setOptions({ styles: styles["default"] });
  });
}

export var styles = {
  default: null,
  hide: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }]
    }
  ]
};

// [END maps_hiding_features_script_body]

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_layer_data_simple]
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -28, lng: 137 },
  });
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
    "https://storage.googleapis.com/mapsdevsite/json/google.json"
  );
}

window.initMap = initMap;
// [END maps_layer_data_simple]

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_layer_data_style]
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -28, lng: 137 },
  });
  // [START maps_layer_data_style_script_snippet_load]
  // Load GeoJSON.
  map.data.loadGeoJson(
    "https://storage.googleapis.com/mapsdevsite/json/google.json"
  );
  // [END maps_layer_data_style_script_snippet_load]
  // [START maps_layer_data_style_script_snippet_style]
  // Set the stroke width, and fill color for each polygon
  map.data.setStyle({
    fillColor: "green",
    strokeWeight: 1,
  });
  // [END maps_layer_data_style_script_snippet_style]
}

window.initMap = initMap;
// [END maps_layer_data_style]

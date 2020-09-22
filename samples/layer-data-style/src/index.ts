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

// [START maps_layer_data_style]
let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
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
// [END maps_layer_data_style]
export { initMap };

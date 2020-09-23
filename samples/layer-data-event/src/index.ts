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

// [START maps_layer_data_event]
let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 4,
    center: { lat: -28, lng: 137 },
  });

  // Load GeoJSON.
  map.data.loadGeoJson(
    "https://storage.googleapis.com/maps-devrel/google.json"
  );

  // Add some style.
  map.data.setStyle((feature) => {
    return /** @type {google.maps.Data.StyleOptions} */ {
      fillColor: feature.getProperty("color"),
      strokeWeight: 1,
    };
  });

  // [START maps_layer_data_event_snippet]
  // Set mouseover event for each feature.
  map.data.addListener("mouseover", (event) => {
    (document.getElementById(
      "info-box"
    ) as HTMLElement).textContent = event.feature.getProperty("letter");
  });
  // [END maps_layer_data_event_snippet]
}
// [END maps_layer_data_event]
export { initMap };

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

// [START maps_js_localcontext_basic]
let map: google.maps.Map;

function initMap() {
  // @ts-ignore beta feature not in type declarations [START maps_js_localcontext_basic_instantiation]
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: ["restaurant", "tourist_attraction"],
    maxPlaceCount: 12,
  });
  // [END maps_js_localcontext_basic_instantiation]

  map = localContextMapView.map;

  // [START maps_js_localcontext_basic_set_options]
  map.setOptions({
    center: { lat: 51.507307, lng: -0.08114 },
    zoom: 14,
  });
  // [END maps_js_localcontext_basic_set_options]
}
// [END maps_js_localcontext_basic]
export { initMap };

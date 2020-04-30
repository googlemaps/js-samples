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

// [START maps_conserve_map_on_scroll]
// [START maps_conserve_map_script_snippet]
function initMap() {
  var locationRio = { lat: -22.915, lng: -43.197 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "cooperative"
  });
  // [END maps_conserve_map_script_snippet]
  var marker = new google.maps.Marker({
    position: locationRio,
    map: map,
    title: "Hello World!"
  });
}
// [END maps_conserve_map_on_scroll]
export { initMap };

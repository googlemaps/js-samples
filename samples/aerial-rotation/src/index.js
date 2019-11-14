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

// [START script-body]
export var map;

export function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.518, lng: -122.672 },
    zoom: 18,
    mapTypeId: "satellite",
    heading: 90,
    tilt: 45
  });
}

export function rotate90() {
  var heading = map.getHeading() || 0;
  map.setHeading(heading + 90);
}

export function autoRotate() {
  // Determine if we're showing aerial imagery.
  if (map.getTilt() !== 0) {
    window.setInterval(rotate90, 3000);
  }
}
// [END script-body]

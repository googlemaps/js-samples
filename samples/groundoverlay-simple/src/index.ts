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

// [START maps_groundoverlay_simple]
// This example uses a GroundOverlay to place an image on the map
// showing an antique map of Newark, NJ.

let historicalOverlay;

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 13,
      center: { lat: 40.74, lng: -74.18 }
    }
  );

  const imageBounds = {
    north: 40.773941,
    south: 40.712216,
    east: -74.12544,
    west: -74.22655
  };

  historicalOverlay = new google.maps.GroundOverlay(
    "https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
    imageBounds
  );
  historicalOverlay.setMap(map);
}
// [END maps_groundoverlay_simple]
export {};

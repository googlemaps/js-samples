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
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

function initMap(): void {
  const center = new google.maps.LatLng({ lat: -25.363, lng: 131.044 });
  const zoom = 4;

  new google.maps.Map(document.getElementById("map")!, {
    zoom,
    center,
    minZoom: zoom - 3,
    maxZoom: zoom + 3,
    restriction: {
      latLngBounds: {
        north: -10,
        south: -40,
        east: 160,
        west: 100,
      },
    },
  });
}
export { initMap };

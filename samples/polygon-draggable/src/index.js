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

// [START maps_polygon_draggable]
// This example creates draggable triangles on the map.
// Note also that the red triangle is geodesic, so its shape changes
// as you drag it north or south.

export function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: { lat: 24.886, lng: -70.268 },
    mapTypeId: "terrain"
  });

  var blueCoords = [
    { lat: 25.774, lng: -60.19 },
    { lat: 18.466, lng: -46.118 },
    { lat: 32.321, lng: -44.757 }
  ];

  // [START region_red_triangle]
  var redCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 }
  ];

  // Construct a draggable red triangle with geodesic set to true.
  new google.maps.Polygon({
    map: map,
    paths: redCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    draggable: true,
    geodesic: true
  });
  // [END region_red_triangle]

  // Construct a draggable blue triangle with geodesic set to false.
  new google.maps.Polygon({
    map: map,
    paths: blueCoords,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.35,
    draggable: true,
    geodesic: false
  });
}
// [END maps_polygon_draggable]

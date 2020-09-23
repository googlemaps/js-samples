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

// [START maps_polygon_hole]
// This example creates a triangular polygon with a hole in it.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 5,
      center: { lat: 24.886, lng: -70.268 },
    }
  );

  // Define the LatLng coordinates for the polygon's  outer path.
  const outerCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
  ];

  // Define the LatLng coordinates for the polygon's inner path.
  // Note that the points forming the inner path are wound in the
  // opposite direction to those in the outer path, to form the hole.
  const innerCoords = [
    { lat: 28.745, lng: -70.579 },
    { lat: 29.57, lng: -67.514 },
    { lat: 27.339, lng: -66.668 },
  ];

  // Construct the polygon, including both paths.
  const bermudaTriangle = new google.maps.Polygon({
    paths: [outerCoords, innerCoords],
    strokeColor: "#FFC107",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFC107",
    fillOpacity: 0.35,
  });
  bermudaTriangle.setMap(map);
}
// [END maps_polygon_hole]
export { initMap };

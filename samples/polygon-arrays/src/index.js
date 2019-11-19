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

// [START maps_polygon_arrays]
// This example creates a simple polygon representing the Bermuda Triangle.
// When the user clicks on the polygon an info window opens, showing
// information about the polygon's coordinates.

export var map;
export var infoWindow;

export function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 24.886, lng: -70.268 },
    mapTypeId: "terrain"
  });

  // Define the LatLng coordinates for the polygon.
  var triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 }
  ];

  // Construct the polygon.
  var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);

  // Add a listener for the click event.
  bermudaTriangle.addListener("click", showArrays);

  infoWindow = new google.maps.InfoWindow();
}

/** @this {google.maps.Polygon} */
export function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();

  var contentString =
    "<b>Bermuda Triangle polygon</b><br>" +
    "Clicked location: <br>" +
    event.latLng.lat() +
    "," +
    event.latLng.lng() +
    "<br>";

  // Iterate over the vertices.
  for (var i = 0; i < vertices.getLength(); i++) {
    var xy = vertices.getAt(i);
    contentString +=
      "<br>" + "Coordinate " + i + ":<br>" + xy.lat() + "," + xy.lng();
  }

  // Replace the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
}
// [END maps_polygon_arrays]

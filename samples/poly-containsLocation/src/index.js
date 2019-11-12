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
// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 24.886, lng: -70.269 },
    zoom: 5
  });

  var triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 }
  ];

  var bermudaTriangle = new google.maps.Polygon({ paths: triangleCoords });

  google.maps.event.addListener(map, "click", function(e) {
    var resultColor = google.maps.geometry.poly.containsLocation(
      e.latLng,
      bermudaTriangle
    )
      ? "blue"
      : "red";

    var resultPath = google.maps.geometry.poly.containsLocation(
      e.latLng,
      bermudaTriangle
    )
      ? // A triangle.
        "m 0 -1 l 1 2 -2 0 z"
      : google.maps.SymbolPath.CIRCLE;

    new google.maps.Marker({
      position: e.latLng,
      map: map,
      icon: {
        path: resultPath,
        fillColor: resultColor,
        fillOpacity: 0.2,
        strokeColor: "white",
        strokeWeight: 0.5,
        scale: 10
      }
    });
  });
}
// [END script-body]

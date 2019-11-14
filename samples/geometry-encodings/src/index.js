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

export function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 34.366, lng: -89.519 }
  });
  var poly = new google.maps.Polyline({
    strokeColor: "#000000",
    strokeOpacity: 1,
    strokeWeight: 3,
    map: map
  });

  // Add a listener for the click event
  google.maps.event.addListener(map, "click", function(event) {
    addLatLngToPoly(event.latLng, poly);
  });
}

/**
 * Handles click events on a map, and adds a new point to the Polyline.
 * Updates the encoding text area with the path's encoded values.
 */
export function addLatLngToPoly(latLng, poly) {
  var path = poly.getPath();
  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear
  path.push(latLng);

  // Update the text field to display the polyline encodings
  var encodeString = google.maps.geometry.encoding.encodePath(path);
  if (encodeString) {
    document.getElementById("encoded-polyline").value = encodeString;
  }
}
// [END script-body]

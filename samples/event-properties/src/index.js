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

// [START maps_event_properties]
function initMap() {
  var originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: originalMapCenter
  });

  var infowindow = new google.maps.InfoWindow({
    content: "Change the zoom level",
    position: originalMapCenter
  });
  infowindow.open(map);

  map.addListener("zoom_changed", function() {
    infowindow.setContent("Zoom: " + map.getZoom());
  });
}
// [END maps_event_properties]
export { initMap };

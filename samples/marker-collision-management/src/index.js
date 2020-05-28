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
// eslint-disable no-undef
// [START maps_marker_collision_management]
let map;
let select;

// Initialize and add the map
function initMap() {
  let markers = [];
  let collisionBehavior = google.maps.CollisionBehavior.REQUIRED;

  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "3a3b33f0edd6ed2a",
    center: { lat: 47.609414458375674, lng: -122.33897030353548 },
    zoom: 17
  });

  const menuList = document.querySelector(".mdc-list");

  // Add the behaviors to the select options
  for (let [key, value] of Object.entries(google.maps.CollisionBehavior)) {
    const item = document.createElement("LI");
    item.classList.add("mdc-list-item");
    item.setAttribute("data-value", key);

    const itemText = document.createElement("SPAN");
    itemText.classList.add("mdc-list-item__text");
    itemText.innerText = value;

    item.appendChild(itemText);
    menuList.appendChild(item);
  }

  select = new mdc.select.MDCSelect(document.querySelector(".mdc-select"));

  select.listen("MDCSelect:change", () => {
    collisionBehavior = select.value;
    markers.forEach(function(marker) {
      marker.set("collisionBehavior", collisionBehavior);
    });
  });

  select.value = collisionBehavior;

  // Create some markers on the map
  markers = [
    [-122.3402, 47.6093],
    [-122.3402, 47.6094],
    [-122.3403, 47.6094],
    [-122.3384, 47.6098],
    [-122.3389, 47.6095],
    [-122.3396, 47.6095],
    [-122.3379, 47.6097],
    [-122.3378, 47.6097],
    [-122.3396, 47.6091],
    [-122.3383, 47.6089],
    [-122.3379, 47.6093],
    [-122.3381, 47.6095],
    [-122.3378, 47.6095]
  ].map(
    ([lng, lat]) =>
      // [START maps_marker_collision_management_create_marker]
      new google.maps.Marker({
        position: new google.maps.LatLng({ lat, lng }),
        map: map,
        collisionBehavior: collisionBehavior
      })
    // [END maps_marker_collision_management_create_marker]
  );
}
// [END maps_marker_collision_management]
export { initMap, map, select };

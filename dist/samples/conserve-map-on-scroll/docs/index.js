/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_conserve_map_on_scroll]
function initMap() {
  const locationRio = { lat: -22.915, lng: -43.197 };
  // [START maps_conserve_map_script_snippet]
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "cooperative",
  });

  // [END maps_conserve_map_script_snippet]
  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
// [END maps_conserve_map_on_scroll]

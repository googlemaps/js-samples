/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_control_simple]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
    zoomControl: false,
    scaleControl: true,
  });
}

window.initMap = initMap;
// [END maps_control_simple]

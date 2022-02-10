/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "8e0a97af9386fef",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });
}

window.initMap = initMap;

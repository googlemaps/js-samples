/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.76, lng: -73.983 },
    zoom: 15,
    mapTypeId: "satellite",
  });

  map.setTilt(45);
}

window.initMap = initMap;

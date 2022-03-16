/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 42.3726399, lng: -71.1096528 },
  });
  const bikeLayer = new google.maps.BicyclingLayer();

  bikeLayer.setMap(map);
}

window.initMap = initMap;

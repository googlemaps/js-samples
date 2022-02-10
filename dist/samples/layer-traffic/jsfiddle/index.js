/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 34.04924594193164, lng: -118.24104309082031 },
  });
  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);
}

window.initMap = initMap;

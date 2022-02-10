/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 51.501904, lng: -0.115871 },
  });
  const transitLayer = new google.maps.TransitLayer();

  transitLayer.setMap(map);
}

window.initMap = initMap;

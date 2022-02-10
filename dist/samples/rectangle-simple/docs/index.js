/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_rectangle_simple]
// This example adds a red rectangle to a map.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 33.678, lng: -116.243 },
    mapTypeId: "terrain",
  });
  const rectangle = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    bounds: {
      north: 33.685,
      south: 33.671,
      east: -116.234,
      west: -116.251,
    },
  });
}

window.initMap = initMap;
// [END maps_rectangle_simple]

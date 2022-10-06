/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.4239163, lng: -122.0947209 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
  const markerView = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.4239163, lng: -122.0947209 },
  });
}

window.initMap = initMap;

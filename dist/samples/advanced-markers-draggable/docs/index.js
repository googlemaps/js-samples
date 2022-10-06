/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_advanced_markers_draggable]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.39094933041195, lng: -122.02503913145092 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
  const infoWindow = new google.maps.InfoWindow();
  // [START maps_advanced_markers_draggable_marker]
  const draggableMarker = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.39094933041195, lng: -122.02503913145092 },
    draggable: true,
    title: "This marker is draggable.",
  });

  // [END maps_advanced_markers_draggable_marker]
  draggableMarker.addListener("click", (event) => {
    infoWindow.close();
    infoWindow.setContent(
      "Pin dropped at: " + draggableMarker.position.toString()
    );
    infoWindow.open(draggableMarker.map, draggableMarker);
  });
}

window.initMap = initMap;
// [END maps_advanced_markers_draggable]

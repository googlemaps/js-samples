/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_js_local_context_restrictions]
let map: google.maps.Map;

function initMap() {
  const center = { lat: 37.4219998, lng: -122.0840572 };
  // [START maps_js_local_context_restrictions_location]
  const bigBounds = {
    north: 37.432,
    south: 37.412,
    west: -122.094,
    east: -122.074,
  };
  // [START maps_js_local_context_restrictions_instantiation]
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [{ type: "restaurant" }],
    maxPlaceCount: 12,
    locationRestriction: bigBounds,
    directionsOptions: { origin: center },
  });
  // [END maps_js_local_context_restrictions_instantiation]
  // [END maps_js_local_context_restrictions_location]

  map = localContextMapView.map!;

  new google.maps.Marker({ position: center, map: map });

  map.setOptions({
    center: center,
    zoom: 16,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
// [END maps_js_local_context_restrictions]
export {};

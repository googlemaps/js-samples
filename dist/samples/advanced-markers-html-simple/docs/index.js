/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_advanced_markers_html_simple]
// [START maps_advanced_markers_html_simple_snippet]
async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 37.42, lng: -122.1 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
  const priceTag = document.createElement("div");

  priceTag.className = "price-tag";
  priceTag.textContent = "$2.5M";

  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.42, lng: -122.1 },
    content: priceTag,
  });
}

// [END maps_advanced_markers_html_simple_snippet]
initMap();
// [END maps_advanced_markers_html_simple]

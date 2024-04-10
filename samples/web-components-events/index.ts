/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_web_components_events]
// This example adds a map using web components.
async function initMap(): Promise<void> {
  const { InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
  console.log('Maps JavaScript API loaded.');

  // Return an array of markers.
  const advancedMarkers = [...document.querySelectorAll('gmp-advanced-marker')];

  let infoWindow = new InfoWindow();

  for (let i = 0; i < advancedMarkers.length; i++) {
    const marker = advancedMarkers[i] as google.maps.marker.AdvancedMarkerElement;
    marker.addEventListener('gmp-click', () => {
      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  }
}

initMap();
// [END maps_web_components_events]
export { };
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
async function initMap() {
  const { InfoWindow } = await google.maps.importLibrary("maps");
  const { PinElement } = await google.maps.importLibrary("marker");

  console.log("Maps JavaScript API loaded.");

  // Return an array of markers.
  const advancedMarkers = [...document.querySelectorAll("gmp-advanced-marker")];
  // Create a shared info window.
  let infoWindow = new InfoWindow();

  for (let i = 0; i < advancedMarkers.length; i++) {
    const marker = advancedMarkers[i];
    const pin = new PinElement({
      glyph: `${i + 1}`,
      scale: 1.5,
    });

    marker.appendChild(pin.element);
    marker.addEventListener("gmp-click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  }
}

initMap();

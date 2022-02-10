/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_streetview_controls]
function initPano() {
  // Note: constructed panorama objects have visible: true
  // set by default.
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("map") as HTMLElement,
    {
      position: { lat: 42.345573, lng: -71.098326 },
      addressControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_CENTER,
      },
      linksControl: false,
      panControl: false,
      enableCloseButton: false,
    }
  );
}

declare global {
  interface Window {
    initPano: () => void;
  }
}
window.initPano = initPano;
// [END maps_streetview_controls]
export {};

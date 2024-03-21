/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example adds a map using web components.
function initMap(): void {
  console.log('Maps JavaScript API loaded.');
  const advancedMarkers = document.querySelectorAll("#marker-click-event-example gmp-advanced-marker");
  for (const advancedMarker of advancedMarkers) {

    customElements.whenDefined(advancedMarker.localName).then(async () => {
      advancedMarker.addEventListener('gmp-click', async () => {

        const infoWindow = new google.maps.InfoWindow({
          //@ts-ignore
          content: advancedMarker.title,
        });
        infoWindow.open({
          //@ts-ignore
          anchor: advancedMarker
        });
      });
    });
  }
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export { };

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_layer_kml]
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 11,
      center: { lat: 41.876, lng: -87.624 },
    }
  );

  const ctaLayer = new google.maps.KmlLayer({
    url: "https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml",
    map: map,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
// [END maps_layer_kml]
export {};

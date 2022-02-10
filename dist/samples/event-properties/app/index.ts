/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap(): void {
  const originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: originalMapCenter,
    }
  );

  const infowindow = new google.maps.InfoWindow({
    content: "Change the zoom level",
    position: originalMapCenter,
  });

  infowindow.open(map);

  map.addListener("zoom_changed", () => {
    infowindow.setContent("Zoom: " + map.getZoom()!);
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

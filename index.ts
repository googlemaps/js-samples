/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let panorama: google.maps.StreetViewPanorama;

function initMap(): void {
  const astorPlace = { lat: 40.729884, lng: -73.990988 };

  // Set up the map
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: astorPlace,
      zoom: 18,
      streetViewControl: false,
    }
  );

  document
    .getElementById("toggle")!
    .addEventListener("click", toggleStreetView);

  // Set up the markers on the map
  const cafeMarker = new google.maps.Marker({
    position: { lat: 40.730031, lng: -73.991428 },
    map,
    icon: "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00",
    title: "Cafe",
  });

  const bankMarker = new google.maps.Marker({
    position: { lat: 40.729681, lng: -73.991138 },
    map,
    icon: "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=dollar|FFFF00",
    title: "Bank",
  });

  const busMarker = new google.maps.Marker({
    position: { lat: 40.729559, lng: -73.990741 },
    map,
    icon: "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=bus|FFFF00",
    title: "Bus Stop",
  });

  // We get the map's default panorama and set up some defaults.
  // Note that we don't yet set it visible.
  panorama = map.getStreetView()!; // TODO fix type
  panorama.setPosition(astorPlace);
  panorama.setPov(
    /** @type {google.maps.StreetViewPov} */ {
      heading: 265,
      pitch: 0,
    }
  );
}

function toggleStreetView(): void {
  const toggle = panorama.getVisible();

  if (toggle == false) {
    panorama.setVisible(true);
  } else {
    panorama.setVisible(false);
  }
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

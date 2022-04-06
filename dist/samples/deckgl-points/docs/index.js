/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_deckgl_points]
// import { GeoJsonLayer } from "deck.gl";
// import { GoogleMapsOverlay } from "@deck.gl/google-maps";
const GeoJsonLayer = deck.GeoJsonLayer;
const GoogleMapsOverlay = deck.GoogleMapsOverlay;

// Initialize and add the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: -110 },
    zoom: 4,
  });
  const deckOverlay = new GoogleMapsOverlay({
    layers: [
      new GeoJsonLayer({
        id: "earthquakes",
        data: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
        filled: true,
        pointRadiusMinPixels: 2,
        pointRadiusMaxPixels: 200,
        opacity: 0.4,
        pointRadiusScale: 0.3,
        getRadius: (f) => Math.pow(10, f.properties.mag),
        getFillColor: [255, 70, 30, 180],
        autoHighlight: true,
        transitions: {
          getRadius: {
            type: "spring",
            stiffness: 0.1,
            damping: 0.15,
            enter: () => [0],
            duration: 10000,
          },
        },
        onDataLoad: () => {
          /* eslint-disable no-undef */
          // @ts-ignore defined in include
          progress.done(); // hides progress bar
          /* eslint-enable no-undef */
        },
      }),
    ],
  });

  deckOverlay.setMap(map);
}

window.initMap = initMap;
// [END maps_deckgl_points]

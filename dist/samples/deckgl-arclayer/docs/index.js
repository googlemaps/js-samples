/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_deckgl_arclayer]
// import { ArcLayer} from "deck.gl";
// import { GoogleMapsOverlay } from "@deck.gl/google-maps";
const ArcLayer = deck.ArcLayer;
const GoogleMapsOverlay = deck.GoogleMapsOverlay;
const AIRPORTS =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50, lng: 14 },
    tilt: 30,
    mapId: "90f87356969d889c",
    zoom: 3,
  });
  const flightsLayer = new ArcLayer({
    id: "flights",
    data: AIRPORTS,
    dataTransform: (d) => d.features.filter((f) => f.properties.scalerank < 4),
    getSourcePosition: () => [14.42076, 50.08804],
    getTargetPosition: (f) => f.geometry.coordinates,
    getSourceColor: [0, 128, 200],
    getTargetColor: [0, 0, 80],
    getWidth: 1,
  });
  const overlay = new GoogleMapsOverlay({
    layers: [flightsLayer],
  });

  overlay.setMap(map);
}

window.initMap = initMap;
// [END maps_deckgl_arclayer]

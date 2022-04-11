/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO Use imports when Deck.gl works in more bundlers
// https://github.com/visgl/deck.gl/issues/6351#issuecomment-1079424167
// import { GoogleMapsOverlay } from "https://cdn.skypack.dev/@deck.gl/google-maps";
// import { TripsLayer } from "https://cdn.skypack.dev/deck.gl";
const GoogleMapsOverlay = deck.GoogleMapsOverlay;
const TripsLayer = deck.TripsLayer;
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json";
const LOOP_LENGTH = 1800;
const VENDOR_COLORS = [
  [255, 0, 0],
  [0, 0, 255], // vendor #1
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.72, lng: -74 },
    mapId: "fae05836df2dc8bb",
    tilt: 45,
    zoom: 15,
  });
  let currentTime = 0;
  const props = {
    id: "trips",
    data: DATA_URL,
    getPath: (d) => d.path,
    getTimestamps: (d) => d.timestamps,
    getColor: (d) => VENDOR_COLORS[d.vendor],
    opacity: 1,
    widthMinPixels: 2,
    trailLength: 180,
    currentTime,
    shadowEnabled: false,
  };
  const overlay = new GoogleMapsOverlay({});

  const animate = () => {
    currentTime = (currentTime + 1) % LOOP_LENGTH;

    const tripsLayer = new TripsLayer({
      ...props,
      currentTime,
    });

    overlay.setProps({
      layers: [tripsLayer],
    });
    window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);
  overlay.setMap(map);
}

window.initMap = initMap;

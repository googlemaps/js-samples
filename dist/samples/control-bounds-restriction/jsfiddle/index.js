/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;
const NEW_ZEALAND_BOUNDS = {
  north: -34.36,
  south: -47.35,
  west: 166.28,
  east: -175.81,
};
const AUCKLAND = { lat: -37.06, lng: 174.58 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: AUCKLAND,
    restriction: {
      latLngBounds: NEW_ZEALAND_BOUNDS,
      strictBounds: false,
    },
    zoom: 7,
  });
}

window.initMap = initMap;

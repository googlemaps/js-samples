/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const locationRio = { lat: -22.915, lng: -43.197 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "greedy",
  });

  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;

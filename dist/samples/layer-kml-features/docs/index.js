/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_layer_kml_features]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 37.06, lng: -95.68 },
  });
  const kmlLayer = new google.maps.KmlLayer({
    url: "https://raw.githubusercontent.com/googlearchive/kml-samples/gh-pages/kml/Placemark/placemark.kml",
    suppressInfoWindows: true,
    map: map,
  });

  kmlLayer.addListener("click", (kmlEvent) => {
    const text = kmlEvent.featureData.description;

    showInContentWindow(text);
  });

  function showInContentWindow(text) {
    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = text;
  }
}

window.initMap = initMap;
// [END maps_layer_kml_features]

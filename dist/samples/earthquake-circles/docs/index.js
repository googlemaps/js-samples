/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_earthquake_circles]
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: -33.865427, lng: 151.196123 },
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
  map.data.setStyle((feature) => {
    const magnitude = feature.getProperty("mag");
    return {
      icon: getCircle(magnitude),
    };
  });
}

function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "red",
    fillOpacity: 0.2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: "white",
    strokeWeight: 0.5,
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;
// [END maps_earthquake_circles]

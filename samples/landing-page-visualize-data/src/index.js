/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START script-body]
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: -33.865427, lng: 151.196123 },
    mapTypeId: "terrain",
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    gestureHandling: "cooperative"
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);

  map.data.setStyle(function(feature) {
    var magnitude = feature.getProperty("mag");
    return {
      icon: getCircle(magnitude)
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
    strokeWeight: 0.5
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}
// [END script-body]

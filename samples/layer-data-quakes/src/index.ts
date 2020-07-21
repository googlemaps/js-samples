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

// [START maps_layer_data_quakes]
let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 20, lng: -160 },
    zoom: 2,
    styles: mapStyle
  });

  map.data.setStyle(styleFeature);

  // Get the earthquake data (JSONP format)
  // This feed is a copy from the USGS feed, you can find the originals here:
  //   http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  const script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json"
  );
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Defines the callback function referenced in the jsonp file.
function eqfeed_callback(data: any) {
  map.data.addGeoJson(data);
}

function styleFeature(feature: google.maps.Data.Feature) {
  const low = [151, 83, 34]; // color of mag 1.0
  const high = [5, 69, 54]; // color of mag 6.0 and above
  const minMag = 1.0;
  const maxMag = 6.0;

  // fraction represents where the value sits between the min and max
  const fraction =
    (Math.min(feature.getProperty("mag"), maxMag) - minMag) / (maxMag - minMag);

  const color = interpolateHsl(low, high, fraction);

  return {
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      strokeWeight: 0.5,
      strokeColor: "#fff",
      fillColor: color,
      fillOpacity: 2 / feature.getProperty("mag"),
      // while an exponent would technically be correct, quadratic looks nicer
      scale: Math.pow(feature.getProperty("mag"), 2)
    },
    zIndex: Math.floor(feature.getProperty("mag"))
  };
}

function interpolateHsl(lowHsl: number[], highHsl: number[], fraction: number) {
  const color: number[] = [];

  for (let i = 0; i < 3; i++) {
    // Calculate color based on the fraction.
    color.push((highHsl[i] - lowHsl[i]) * fraction + lowHsl[i]);
  }

  return "hsl(" + color[0] + "," + color[1] + "%," + color[2] + "%)";
}

const mapStyle: google.maps.MapTypeStyle[] = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#fcfcfc" }]
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { hue: "#5f94ff" }, { lightness: 60 }]
  }
];
// [END maps_layer_data_quakes]
export {};

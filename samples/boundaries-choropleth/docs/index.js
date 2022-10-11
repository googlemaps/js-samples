/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_boundaries_choropleth]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.76, lng: -101.64 },
    zoom: 5,
    // In the cloud console, configure this Map ID with a style that enables the
    // "Administrative Area Level 1" feature layer.
    mapId: "7ba16be0c9375fa7",
  });
  //@ts-ignore
  const featureLayer = map.getFeatureLayer(
    google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1
  );

  // [START maps_boundaries_choropleth_style_function]
  featureLayer.style = (featureStyleFunctionOptions) => {
    const placeFeature = featureStyleFunctionOptions.feature;
    const population = states[placeFeature.displayName];
    let fillColor;

    // Specify colors using any of the following:
    // * Named ('green')
    // * Hexadecimal ('#FF0000')
    // * RGB ('rgb(0, 0, 255)')
    // * HSL ('hsl(60, 100%, 50%)')
    if (population < 2000000) {
      fillColor = "green";
    } else if (population < 5000000) {
      fillColor = "red";
    } else if (population < 10000000) {
      fillColor = "blue";
    } else if (population < 40000000) {
      fillColor = "yellow";
    }
    return {
      fillColor,
      fillOpacity: 0.5,
    };
  };

  // Population data by state.
  const states = {
    "Alabama": 5039877,
    "Alaska": 732673,
    "Arizona": 7276316,
    "Arkansas": 3025891,
    "California": 39237836,
    "Colorado": 5812069,
    "Connecticut": 3605597,
    "Delaware": 1003384,
    "Florida": 21781128,
    "Georgia": 10799566,
    "Hawaii": 1441553,
    "Idaho": 1900923,
    "Illinois": 12671469,
    "Indiana": 6805985,
    "Iowa": 3193079,
    "Kansas": 2934582,
    "Kentucky": 4509394,
    "Louisiana": 4624047,
    "Maine": 1372247,
    "Maryland": 6165129,
    "Massachusetts": 6984723,
    "Michigan": 10050811,
    "Minnesota": 5707390,
    "Mississippi": 2949965,
    "Missouri": 6168187,
    "Montana": 1104271,
    "Nebraska": 1963692,
    "Nevada": 3143991,
    "New Hampshire": 1388992,
    "New Jersey": 9267130,
    "New Mexico": 2115877,
    "New York": 19835913,
    "North Carolina": 10551162,
    "North Dakota": 774948,
    "Ohio": 11780017,
    "Oklahoma": 3986639,
    "Oregon": 4246155,
    "Pennsylvania": 12964056,
    "Rhode Island": 1095610,
    "South Carolina": 5190705,
    "South Dakota": 895376,
    "Tennessee": 6975218,
    "Texas": 29527941,
    "Utah": 3337975,
    "Vermont": 645570,
    "Virginia": 8642274,
    "Washington": 7738692,
    "West Virginia": 1782959,
    "Wisconsin": 5895908,
    "Wyoming": 578803,
  };
  // [END maps_boundaries_choropleth_style_function]
}

window.initMap = initMap;
// [END maps_boundaries_choropleth]

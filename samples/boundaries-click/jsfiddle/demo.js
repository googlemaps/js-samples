/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;
let featureLayer;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.23, lng: -105.73 },
    zoom: 8,
    // In the cloud console, configure this Map ID with a style that enables the
    // "Administrative Area Level 2" Data Driven Styling type.
    mapId: "a3efe1c035bad51b", // <YOUR_MAP_ID_HERE>,
  });
  // Add the feature layer.
  //@ts-ignore
  featureLayer = map.getFeatureLayer("ADMINISTRATIVE_AREA_LEVEL_2");
  // Add the event listener for the feature layer.
  featureLayer.addListener("click", handlePlaceClick);
  infoWindow = new google.maps.InfoWindow({});
  // Apply style on load, to enable clicking.
  applyStyleToSelected();
}

// Handle the click event.
async function handlePlaceClick(event) {
  let feature = event.features[0];

  if (!feature.placeId) return;

  // Apply the style to the feature layer.
  applyStyleToSelected(feature.placeId);

  // Add the info window.
  const place = await feature.fetchPlace();
  let content =
    '<span style="font-size:small">Display name: ' +
    place.displayName +
    "<br/> Place ID: " +
    feature.placeId +
    "<br/> Feature type: " +
    feature.featureType +
    "</span>";

  updateInfoWindow(content, event.latLng);
}

// Stroke and fill with minimum opacity value.
//@ts-ignore
const styleDefault = {
  strokeColor: "#810FCB",
  strokeOpacity: 1.0,
  strokeWeight: 2.0,
  fillColor: "white",
  fillOpacity: 0.1, // Polygons must be visible to receive click events.
};
// Style for the clicked Administrative Area Level 2 polygon.
//@ts-ignore
const styleClicked = {
  ...styleDefault,
  fillColor: "#810FCB",
  fillOpacity: 0.5,
};

// Apply styles to the map.
function applyStyleToSelected(placeid) {
  // Apply styles to the feature layer.
  featureLayer.style = (options) => {
    // Style fill and stroke for a polygon.
    if (placeid && options.feature.placeId == placeid) {
      return styleClicked;
    }
    // Style only the stroke for the entire feature type.
    return styleDefault;
  };
}

// Helper function to create an info window.
function updateInfoWindow(content, center) {
  infoWindow.setContent(content);
  infoWindow.setPosition(center);
  infoWindow.open({
    map,
    shouldFocus: false,
  });
}

window.initMap = initMap;

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_dds_datasets_polygon]
// [START dds_datasets_polygon]
let map;

// [START dds_datasets_polygon_featurestylefunction]
function setStyle(/* FeatureStyleFunctionOptions */ params) {
  return /* FeatureStyleOptions */ {
    strokeColor: "green",
    strokeWeight: 2,
    strokeOpacity: 1,
    fillColor: "green",
    fillOpacity: 0.3,
  };
}

// [END dds_datasets_polygon_featurestylefunction]
function initMap() {
  const position = new google.maps.LatLng(40.757815, -73.933123);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: position,
    mapId: "b98e588c46685dd7",
  });
  // Dataset ID for NYC park data.
  const datasetId = "6fe13aa9-b900-45e7-b636-3236672c3f4f";
  //@ts-ignore
  // [START dds_datasets_polygon_featurelayer]
  const datasetLayer = map.getDatasetFeatureLayer(datasetId);

  datasetLayer.style = setStyle;

  // [END dds_datasets_polygon_featurelayer]
  // [START dds_datasets_polygon_attribution_div]
  // Create an attribution DIV and add the attribution to the map.
  const attributionDiv = document.createElement("div");
  const attributionControl = createAttribution(map);

  attributionDiv.appendChild(attributionControl);
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(attributionDiv);
  // [END dds_datasets_polygon_attribution_div]
}

// [START dds_datasets_polygon_attribution_control]
// Create a custom control to hold attribution text.
function createAttribution(map) {
  const attributionLabel = document.createElement("div");

  // Define CSS styles.
  attributionLabel.style.backgroundColor = "#fff";
  attributionLabel.style.opacity = "0.7";
  attributionLabel.style.fontFamily = "Roboto,Arial,sans-serif";
  attributionLabel.style.fontSize = "10px";
  attributionLabel.style.padding = "2px";
  attributionLabel.style.margin = "2px";
  attributionLabel.textContent = "Data source: NYC Open Data";
  return attributionLabel;
}

window.initMap = initMap;
// [END maps_dds_datasets_polygon]

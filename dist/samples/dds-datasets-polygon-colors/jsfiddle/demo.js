/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;

function setStyle(/* FeatureStyleFunctionOptions */ params) {
  const datasetFeature = params.feature;

  console.log(datasetFeature);

  // 'typecategory' is an attribute in this Dataset.
  const typeCategory = datasetFeature.datasetAttributes["typecategory"];

  switch (typeCategory) {
    case "Undeveloped": // Color undeveloped areas blue.
      return /* FeatureStyleOptions */ {
        strokeColor: "blue",
        strokeWeight: 2,
        strokeOpacity: 1,
        fillColor: "blue",
        fillOpacity: 0.3,
      };
      break;
    case "Historic House Park": // Color historical house sites red.
      return /* FeatureStyleOptions */ {
        strokeColor: "red",
        strokeWeight: 2,
        strokeOpacity: 1,
        fillColor: "red",
        fillOpacity: 0.3,
      };
      break;
    default: // Color other type categories green.
      return /* FeatureStyleOptions */ {
        strokeColor: "green",
        strokeWeight: 2,
        strokeOpacity: 1,
        fillColor: "green",
        fillOpacity: 0.3,
      };
      break;
  }
}

function initMap() {
  const position = new google.maps.LatLng(40.639258, -74.123921);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "b98e588c46685dd7",
  });
  // Dataset ID for NYC park data.
  const datasetId = "6fe13aa9-b900-45e7-b636-3236672c3f4f";
  //@ts-ignore
  const datasetLayer = map.getDatasetFeatureLayer(datasetId);

  datasetLayer.style = setStyle;

  // Create an attribution DIV and add the attribution to the map.
  const attributionDiv = document.createElement("div");
  const attributionControl = createAttribution(map);

  attributionDiv.appendChild(attributionControl);
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(attributionDiv);
}

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

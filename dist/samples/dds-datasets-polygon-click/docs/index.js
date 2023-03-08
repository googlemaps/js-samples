/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_dds_datasets_polygon_click]
let map;
let lastClickedFeatureIds = [];
let datasetLayer;

// [START maps_dds_datasets_polygon_click_eventhandler]
function handleClick(/* MouseEvent */ e) {
  if (e.features) {
    lastClickedFeatureIds =
      // Note, 'globalid' is an attribute in this Dataset.
      e.features.map((f) => f.datasetAttributes["globalid"]);
  }

  //@ts-ignore
  datasetLayer.style = setStyle;
}

// [END maps_dds_datasets_polygon_click_eventhandler]
// [START maps_dds_datasets_polygon_click_stylefunction]
function setStyle(/* FeatureStyleFunctionOptions */ params) {
  const datasetFeature = params.feature;

  // Note, 'globalid' is an attribute in this Dataset.
  //@ts-ignore
  if (
    lastClickedFeatureIds.includes(datasetFeature.datasetAttributes["globalid"])
  ) {
    return /* FeatureStyleOptions */ {
      strokeColor: "blue",
      strokeWeight: 2,
      strokeOpacity: 1,
      fillColor: "blue",
      fillOpacity: 0.5,
    };
  }
  return /* FeatureStyleOptions */ {
    strokeColor: "green",
    strokeWeight: 2,
    strokeOpacity: 1,
    fillColor: "green",
    fillOpacity: 0.3,
  };
}

// [END maps_dds_datasets_polygon_click_stylefunction]
function initMap() {
  const position = new google.maps.LatLng(40.796675, -73.946275);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "b98e588c46685dd7",
  });
  // Dataset ID for NYC park data.
  const datasetId = "6fe13aa9-b900-45e7-b636-3236672c3f4f";

  //@ts-ignore
  datasetLayer = map.getDatasetFeatureLayer(datasetId);
  datasetLayer.style = setStyle;
  // [START maps_dds_datasets_polygon_click_addlistener]
  datasetLayer.addListener("click", handleClick);

  // [END maps_dds_datasets_polygon_click_addlistener]
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
// [END maps_dds_datasets_polygon_click]

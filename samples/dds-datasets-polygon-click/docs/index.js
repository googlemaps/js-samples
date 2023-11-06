/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_dds_datasets_polygon_click]
let map;
let lastInteractedFeatureIds = [];
let lastClickedFeatureIds = [];
let datasetLayer;

// [START maps_dds_datasets_polygon_click_eventhandler]
// Note, 'globalid' is an attribute in this Dataset.
function handleClick(/* MouseEvent */ e) {
  if (e.features) {
    lastClickedFeatureIds = e.features.map(
      (f) => f.datasetAttributes["globalid"],
    );
  }

  //@ts-ignore
  datasetLayer.style = applyStyle;
}

function handleMouseMove(/* MouseEvent */ e) {
  if (e.features) {
    lastInteractedFeatureIds = e.features.map(
      (f) => f.datasetAttributes["globalid"],
    );
  }

  //@ts-ignore
  datasetLayer.style = applyStyle;
}

// [END maps_dds_datasets_polygon_click_eventhandler]
async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const position = { lat: 40.780101, lng: -73.96778 };

  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "b98e588c46685dd7",
    mapTypeControl: false,
  });

  // Dataset ID for NYC park data.
  const datasetId = "6fe13aa9-b900-45e7-b636-3236672c3f4f";

  //@ts-ignore
  // [START maps_dds_datasets_polygon_click_addlistener]
  datasetLayer = map.getDatasetFeatureLayer(datasetId);
  datasetLayer.style = applyStyle;
  datasetLayer.addListener("click", handleClick);
  datasetLayer.addListener("mousemove", handleMouseMove);
  // Map event listener.
  map.addListener("mousemove", () => {
    // If the map gets a mousemove, that means there are no feature layers
    // with listeners registered under the mouse, so we clear the last
    // interacted feature ids.
    if (lastInteractedFeatureIds?.length) {
      lastInteractedFeatureIds = [];
      datasetLayer.style = applyStyle;
    }
  });

  // [END maps_dds_datasets_polygon_click_addlistener]
  const attributionDiv = document.createElement("div");
  const attributionControl = createAttribution(map);

  attributionDiv.appendChild(attributionControl);
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(attributionDiv);
}

// [START maps_dds_datasets_polygon_click_stylefunction]
const styleDefault = {
  strokeColor: "green",
  strokeWeight: 2.0,
  strokeOpacity: 1.0,
  fillColor: "green",
  fillOpacity: 0.3,
};
const styleClicked = {
  ...styleDefault,
  strokeColor: "blue",
  fillColor: "blue",
  fillOpacity: 0.5,
};
const styleMouseMove = {
  ...styleDefault,
  strokeWeight: 4.0,
};

function applyStyle(/* FeatureStyleFunctionOptions */ params) {
  const datasetFeature = params.feature;

  // Note, 'globalid' is an attribute in this dataset.
  //@ts-ignore
  if (
    lastClickedFeatureIds.includes(datasetFeature.datasetAttributes["globalid"])
  ) {
    return styleClicked;
  }

  //@ts-ignore
  if (
    lastInteractedFeatureIds.includes(
      datasetFeature.datasetAttributes["globalid"],
    )
  ) {
    return styleMouseMove;
  }
  return styleDefault;
}

// [END maps_dds_datasets_polygon_click_stylefunction]
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

initMap();
// [END maps_dds_datasets_polygon_click]

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let map;
let lastClickedFeatureIds = [];
let datasetLayer;

function handleClick( /* MouseEvent */ e) {
  if (e.features) {
    lastClickedFeatureIds =
        // Note, 'globalid' is an attribute in this Dataset.
        e.features.map(f => f.datasetAttributes['globalid']);
  }
  //@ts-ignore
  datasetLayer.style = setStyle;
}

function setStyle(/* FeatureStyleFunctionOptions */ params) {
    const datasetFeature = params.feature;

    // Note, 'globalid' is an attribute in this dataset.
    //@ts-ignore
    if (lastClickedFeatureIds.includes(datasetFeature.datasetAttributes['globalid'])) {
      return /* FeatureStyleOptions */ {
        strokeColor: 'blue',
        strokeWeight: 2,
        strokeOpacity: 1,
        fillColor: 'blue',
        fillOpacity: 0.5,
      };
    }
    return /* FeatureStyleOptions */ {
      strokeColor: 'green',
      strokeWeight: 2,
      strokeOpacity: 1,
      fillColor: 'green',
      fillOpacity: 0.3,
    };
}

async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { LatLng } = await google.maps.importLibrary("core") as google.maps.CoreLibrary;
    
    const position = new LatLng(40.796675, -73.946275);
    const map = new Map(document.getElementById('map') as HTMLElement, {
      zoom: 13,
      center: position,
      mapId: 'b98e588c46685dd7',
      mapTypeControl: false,
    });

    // Dataset ID for NYC park data.
    const datasetId = '6fe13aa9-b900-45e7-b636-3236672c3f4f';
    //@ts-ignore
    datasetLayer = map.getDatasetFeatureLayer(datasetId);
    datasetLayer.style = setStyle;
    datasetLayer.addListener('click', handleClick);

    const attributionDiv = document.createElement('div');
    const attributionControl = createAttribution(map);
    attributionDiv.appendChild(attributionControl);
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(attributionDiv);
}

function createAttribution(map) {
    const attributionLabel = document.createElement('div');
    // Define CSS styles.
    attributionLabel.style.backgroundColor = '#fff';
    attributionLabel.style.opacity = '0.7';
    attributionLabel.style.fontFamily = 'Roboto,Arial,sans-serif';
    attributionLabel.style.fontSize = '10px';
    attributionLabel.style.padding = '2px';
    attributionLabel.style.margin = '2px';
    attributionLabel.textContent = 'Data source: NYC Open Data';
    return attributionLabel;
}

initMap();
export { };
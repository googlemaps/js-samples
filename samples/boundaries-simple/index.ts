/**
* @license
* Copyright 2022 Google LLC. All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

/**
* This is the simplest possible example. It calls the styling function with a Place ID.
*/

// [START maps_boundaries_simple]
let map: google.maps.Map;
//@ts-ignore
let featureLayer;

function initMap() {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: { lat: 20.773, lng: -156.01 }, // Hana, HI
    zoom: 12,
    // In the cloud console, configure this Map ID with a style that enables the
    // "Locality" feature layer.
    mapId: 'a3efe1c035bad51b', // <YOUR_MAP_ID_HERE>,
  });

  //@ts-ignore
  featureLayer = map.getFeatureLayer('LOCALITY');
  
  // [START maps_boundaries_simple_style_single]
  // Define a style with purple fill and border.
  //@ts-ignore
  const featureStyleOptions: google.maps.FeatureStyleOptions = {
    strokeColor: '#810FCB',
    strokeOpacity: 1.0,
    strokeWeight: 3.0,
    fillColor: '#810FCB',
    fillOpacity: 0.5
  };

  // Apply the style to a single boundary.
  //@ts-ignore
  featureLayer.style = (options: { feature: { placeId: string; }; }) => {
    if (options.feature.placeId == 'ChIJ0zQtYiWsVHkRk8lRoB1RNPo') { // Hana, HI
      return featureStyleOptions;
    }
  };
  // [END maps_boundaries_simple_style_single]

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
// [END maps_boundaries_simple]
export {};

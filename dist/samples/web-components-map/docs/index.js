/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_web_components_map]
// This example adds a map using web components.
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  console.log("Maps JavaScript API loaded.");
}

initMap();
// [END maps_web_components_map]

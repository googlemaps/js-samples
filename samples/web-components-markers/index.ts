/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_web_components_markers]
// Add libraries and log a message.
async function initMap(): Promise<void> {
    await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    console.log('Maps JavaScript API loaded.');
}

initMap();
// [END maps_web_components_markers]
export { };

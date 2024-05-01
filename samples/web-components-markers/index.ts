/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_web_components_markers]
// This example adds a map with markers, using web components.
// [START maps_web_components_markers_initmap]
async function initMap(): Promise<void> {
    console.log('Maps JavaScript API loaded.');
}
// [END maps_web_components_markers_initmap]
declare global {
    interface Window {
      initMap: () => void;
    }
  }
window.initMap = initMap;
// [END maps_web_components_markers]
export { };

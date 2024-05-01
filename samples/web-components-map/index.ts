/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_web_components_map]
// This example adds a map using web components.
async function initMap(): Promise<void> {
    console.log('Maps JavaScript API loaded.');
}

declare global {
    interface Window {
      initMap: () => void;
    }
  }
window.initMap = initMap;
// [END maps_web_components_map]
export { };

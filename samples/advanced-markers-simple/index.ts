/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_advanced_markers_simple]
async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    const map = new Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 37.4239163, lng: -122.0947209 },
        zoom: 14,
        mapId: '4504f8b37365c3d0',
    });
    // [START maps_advanced_markers_simple_marker]
    const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 37.4239163, lng: -122.0947209 },
    });
    // [END maps_advanced_markers_simple_marker]
}

initMap();
// [END maps_advanced_markers_simple]
export { };
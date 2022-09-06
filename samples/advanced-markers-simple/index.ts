/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_advanced_markers_simple]
// [START maps_advanced_markers_simple_snippet]
function initMap() {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 37.4239163, lng: -122.0947209 },
        zoom: 14,
        mapId: '4504f8b37365c3d0',
    });

    const markerView = new google.maps.marker.AdvancedMarkerView({
        map,
        position: { lat: 37.4239163, lng: -122.0947209 },
    });
}
// [END maps_advanced_markers_simple_snippet]
declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;
// [END maps_advanced_markers_simple]
export { };
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_web_components_accessibility]
async function initMap(): Promise<void> {
    const { InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    console.log('Maps JavaScript API loaded.');

    // [START maps_web_components_accessibility_query]
    // Return an array of markers.
    const advancedMarkers = [...document.querySelectorAll('gmp-advanced-marker')];
    // [END maps_web_components_accessibility_query]

    // [START maps_web_components_accessibility_iterate]
    // Create a shared info window.
    let infoWindow = new InfoWindow();

    for (let i = 0; i < advancedMarkers.length; i++) {
        const marker = advancedMarkers[i] as google.maps.marker.AdvancedMarkerElement;
        const pin = new PinElement({
            glyph: `${i + 1}`,
            scale: 1.5,
        });

        marker.appendChild(pin.element);
        marker.addEventListener('gmp-click', () => {
            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
        });
    }
    // [END maps_web_components_accessibility_iterate]
}

initMap();
// [END maps_web_components_accessibility]
export { };
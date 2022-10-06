/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap() {
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 12,
        center: { lat: 34.84555, lng: -111.8035 },
        mapId: '4504f8b37365c3d0',
    });

    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    const tourStops = [
        [{ lat: 34.8791806, lng: -111.8265049 }, "Boynton Pass"],
        [{ lat: 34.8559195, lng: -111.7988186 }, "Airport Mesa"],
        [{ lat: 34.832149, lng: -111.7695277 }, "Chapel of the Holy Cross"],
        [{ lat: 34.823736, lng: -111.8001857 }, "Red Rock Crossing"],
        [{ lat: 34.800326, lng: -111.7665047 }, "Bell Rock"],
    ];

    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    tourStops.forEach(([position, title], i) => {
        const pinView = new google.maps.marker.PinView({
            glyph: `${i + 1}`,
        });

        const marker = new google.maps.marker.AdvancedMarkerView({
            position,
            map,
            title: `${i + 1}. ${title}`,
            content: pinView.element,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener('click', ({ domEvent, latLng }) => {
            const { target } = domEvent;
            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
        });
    });
}

declare global {
    interface Window {
        initMap: () => void;
    }
}

window.initMap = initMap;
export { };
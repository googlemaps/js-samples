/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: {lat: 47.65196191658531, lng: -122.30716770065949},
        zoom: 19,
        tilt: 67.5,
        heading: 45,
        mapId: '6ff586e93e18149f',
    });
    const pinView = new google.maps.marker.PinView({
        background: '#4b2e83',
        borderColor: '#b7a57a',
        glyphColor: '#b7a57a',
        scale: 2.0,
    });

    const markerView = new google.maps.marker.AdvancedMarkerView({
        map,
        content: pinView.element,
        // Set altitude to 20 meters above the ground.
        position: { lat: 47.65170843460547, lng: -122.30754, altitude: 20 },
    });
}

declare global {
    interface Window {
        initMap: () => void;
    }
}

window.initMap = initMap;
export { };
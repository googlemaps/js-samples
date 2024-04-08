/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_advanced_markers_draggable]
 async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    
    const map = new Map(document.getElementById('map') as HTMLElement, {
        center: {lat: 37.39094933041195, lng: -122.02503913145092},
        zoom: 14,
        mapId: '4504f8b37365c3d0',
    });

    const infoWindow = new InfoWindow();

    // [START maps_advanced_markers_draggable_marker]
    const draggableMarker = new AdvancedMarkerElement({
        map,
        position: {lat: 37.39094933041195, lng: -122.02503913145092},
        gmpDraggable: true,
        title: "This marker is draggable.",
    });
    // [END maps_advanced_markers_draggable_marker]
    draggableMarker.addListener('dragend', (event) => {
        const position = draggableMarker.position as google.maps.LatLng;
        infoWindow.close();
        infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
        infoWindow.open(draggableMarker.map, draggableMarker);
    });
    
}

initMap();
// [END maps_advanced_markers_draggable]
export { };

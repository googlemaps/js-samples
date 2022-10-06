/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

 function initMap() {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: {lat: 37.39094933041195, lng: -122.02503913145092},
        zoom: 14,
        mapId: '4504f8b37365c3d0',
    });

    const infoWindow = new google.maps.InfoWindow();

    const draggableMarker = new google.maps.marker.AdvancedMarkerView({
        map,
        position: {lat: 37.39094933041195, lng: -122.02503913145092},
        draggable: true,
        title: "This marker is draggable.",
    });
    draggableMarker.addListener('click', (event) => {
        infoWindow.close();
        infoWindow.setContent('Pin dropped at: ' + draggableMarker.position.toString());
        infoWindow.open(draggableMarker.map, draggableMarker);
    });
    
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;
export { };
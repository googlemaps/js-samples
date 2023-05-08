/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let map: google.maps.Map;
let marker: google.maps.marker.AdvancedMarkerElement;
let infoWindow: google.maps.InfoWindow;
async function initMap(): Promise<void> {
    // Request needed libraries.
    //@ts-ignore
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary("marker"),
        google.maps.importLibrary("places")
      ]);

    // Initialize the map.
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 40.749933, lng: -73.98633 },
        zoom: 13,
        mapId: '4504f8b37365c3d0',
        mapTypeControl: false,
    });
    // Create the input HTML element, and add it to the map as a custom control.
    const input = document.createElement('input');
    input.id = 'pac-input';
    //@ts-ignore
    const pac = new google.maps.places.PlaceAutocompleteElement({ inputElement: input });

    const card = document.getElementById('pac-card') as HTMLElement;
    card.appendChild(pac.element as HTMLElement);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

    // Create the marker and infowindow
    marker = new google.maps.marker.AdvancedMarkerElement({
        map,
    });
    
    infoWindow = new google.maps.InfoWindow({});

    // Add the gmp-placeselect listener, and display the results on the map.
    pac.addListener('gmp-placeselect', async ({ place }) => {
        await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] });

        // If the place has a geometry, then present it on a map.
        if (place.viewport) {
            map.fitBounds(place.viewport);
        } else {
            map.setCenter(place.location);
            map.setZoom(17);
        }

        let content = '<div id="infowindow-content">' +
        '<span id="place-displayname" class="title">' + place.displayName + '</span><br />' +
        '<span id="place-address">' + place.formattedAddress + '</span>' +
        '</div>';

        updateInfoWindow(content, place.location);
        marker.position = place.location;
    });
}

// Helper function to create an info window.
function updateInfoWindow(content, center) {
    infoWindow.setContent(content);
    infoWindow.setPosition(center);
    infoWindow.open({
        map,
        anchor: marker,
        shouldFocus: false,
    });
}

initMap();
export { };
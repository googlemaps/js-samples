/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_place_nearby_search]
let map;
let center;

async function initMap() {
    const { Map, InfoWindow } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;

    center = { lat: 37.4161493, lng: -122.0812166 };

    map = new Map(document.getElementById('map') as HTMLElement, {
        center: center,
        zoom: 11,
        // [START_EXCLUDE]
        mapId: '4504f8b37365c3d0',
        // [END_EXCLUDE]
    });
    nearbySearch();
}

async function nearbySearch() {
    const { Place } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    // [START maps_place_nearby_search_request]
    const request = {
        // required parameters
        fields: ['displayName', 'location', 'businessStatus'],
        locationRestriction: {
            center: { lat: 37.4161493, lng: -122.0812166 },
            radius: 500, 
        },
        // optional parameters
        includedPrimaryTypes: ['restaurant'],
        maxResultCount: 8,
        language: 'en-US',
        region: 'us',
    };

    //@ts-ignore
    const { places } = await Place.searchNearby(request);
    // [END maps_place_nearby_search_request]

    if (places.length) {
        console.log(places);

        const { LatLngBounds } = await google.maps.importLibrary("core") as google.maps.CoreLibrary;
        const bounds = new LatLngBounds();

        // Loop through and get all the results.
        places.forEach((place) => {
            const markerView = new AdvancedMarkerElement({
                map,
                position: place.location,
                title: place.displayName,
            });

            bounds.extend(place.location);
            console.log(place);
        });
    
        map.fitBounds(bounds);

    } else {
        console.log("No results");
    }
}

initMap();
// [END maps_place_nearby_search]

export { };
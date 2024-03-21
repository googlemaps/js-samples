
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let map;
let center;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

    center = {lat: 37.4161493, lng: -122.0812166};
    map = new Map(document.getElementById('map') as HTMLElement, {
        center: center,
        zoom: 14,
        // [START_EXCLUDE]
        mapId: '4504f8b37365c3d0',
        // [END_EXCLUDE]
    });

    findPlaces();
}

async function findPlaces() {
    const { Place } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
    //@ts-ignore
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    const request = {
        textQuery: 'Tacos in Mountain View',
        fields: ['displayName', 'location', 'businessStatus'],
        includedType: 'restaurant',
        isOpenNow: true,
        language: 'en-US',
        maxResultCount: 7,
        minRating: 3.2,
        region: 'us',
        useStrictTypeFiltering: false,
    };

    //@ts-ignore
    const { places } = await Place.searchByText(request);

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

        map.setCenter(bounds.getCenter());

    } else {
        console.log('No results');
    }
}

initMap();

export { };

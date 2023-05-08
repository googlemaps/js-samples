/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let map: google.maps.Map;
let centerCoordinates = { lat: 37.4161493, lng: -122.0812166 };

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const { Place } =  await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    map = new Map(document.getElementById('map') as HTMLElement, {
        center: centerCoordinates,
        zoom: 14,
        // [START_EXCLUDE]
        mapId: '4504f8b37365c3d0',
        // [END_EXCLUDE]
    });

    findPlace(AdvancedMarkerElement, Place);
    getPlaceDetails(Place);
}

async function findPlace(AdvancedMarkerElement, Place) {
    const request = {
        query: 'Sports Page',
        fields: ['displayName', 'location'],
        locationBias: centerCoordinates,
    };
    
    const { places } = await Place.findPlaceFromQuery(request);

    if (places.length) {
        const place = places[0];
        const location = place.location as google.maps.LatLng;
        const markerView = new AdvancedMarkerElement({
            map,
            position: place.location,
            title: place.displayName,
        });
        map.setCenter(location);

    } else {
        console.log('No results');
    }
}

async function getPlaceDetails(Place) {
    // Use place ID to create a new Place instance.
    const place = new Place({
        id: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
        requestedLanguage: 'en', // optional
    });

    // Call fetchFields, passing the desired data fields.
    await place.fetchFields({ fields: ['displayName', 'formattedAddress'] });

    // Show the result
    console.log(place.displayName);
    console.log(place.formattedAddress);
}

async function findPlaceByPhone(AdvancedMarkerElement, Place) {
    const request = {
        phoneNumber: '+1(206)787-5388',
        fields: ['displayName', 'location'],
    }

    const { places } = await Place.findPlaceFromPhoneNumber(request);

    if (places.length) {
        const place = places[0];
        const markerView = new AdvancedMarkerElement({
            map,
            position: place.location,
            title: place.displayName,
        });
    } else {
        console.log('No results');
    }
}

initMap();
export { };
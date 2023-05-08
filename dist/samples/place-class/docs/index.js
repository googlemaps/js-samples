/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_place_class]
// [START maps_place_class_findplacebyquery]
let map;
let centerCoordinates = { lat: 37.4161493, lng: -122.0812166 };

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: centerCoordinates,
    zoom: 14,
    // [START_EXCLUDE]
    mapId: "4504f8b37365c3d0",
    // [END_EXCLUDE]
  });
  findPlace(AdvancedMarkerElement, Place);
  getPlaceDetails(Place);
}

async function findPlace(AdvancedMarkerElement, Place) {
  const request = {
    query: "Sports Page",
    fields: ["displayName", "location"],
    locationBias: centerCoordinates,
  };
  const { places } = await Place.findPlaceFromQuery(request);

  if (places.length) {
    const place = places[0];
    const location = place.location;
    const markerView = new AdvancedMarkerElement({
      map,
      position: place.location,
      title: place.displayName,
    });

    map.setCenter(location);
  } else {
    console.log("No results");
  }
}

// [END maps_place_class_findplacebyquery]
// [START maps_place_class_fetchfields]
async function getPlaceDetails(Place) {
  // Use place ID to create a new Place instance.
  const place = new Place({
    id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
    requestedLanguage: "en", // optional
  });

  // Call fetchFields, passing the desired data fields.
  await place.fetchFields({ fields: ["displayName", "formattedAddress"] });
  // Show the result
  console.log(place.displayName);
  console.log(place.formattedAddress);
}

// [END maps_place_class_fetchfields]
// [START maps_place_class_findplacebyphonenumber]
async function findPlaceByPhone(AdvancedMarkerElement, Place) {
  const request = {
    phoneNumber: "+1(206)787-5388",
    fields: ["displayName", "location"],
  };
  const { places } = await Place.findPlaceFromPhoneNumber(request);

  if (places.length) {
    const place = places[0];
    const markerView = new AdvancedMarkerElement({
      map,
      position: place.location,
      title: place.displayName,
    });
  } else {
    console.log("No results");
  }
}

// [END maps_place_class_findplacebyphonenumber]
initMap();
// [END maps_place_class]

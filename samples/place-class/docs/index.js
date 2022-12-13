/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_place_class]
// [START maps_place_class_findplacebyquery]
let map;
let centerCoordinates = { lat: 37.4161493, lng: -122.0812166 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerCoordinates,
    zoom: 14,
    // [START_EXCLUDE]
    mapId: "4504f8b37365c3d0",
    // [END_EXCLUDE]
  });
  findPlace();
}

async function findPlace() {
  const request = {
    query: "Sports Page",
    fields: ["displayName", "location"],
    locationBias: centerCoordinates,
  };
  const { places } = await google.maps.places.Place.findPlaceFromQuery(request);

  if (places.length) {
    const place = places[0];
    const location = place.location;
    const markerView = new google.maps.marker.AdvancedMarkerView({
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
async function getPlaceDetails() {
  // Use place ID to create a new Place instance.
  const place = new google.maps.places.Place({
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
async function findPlaceByPhone() {
  const request = {
    phoneNumber: "+1(206)787-5388",
    fields: ["displayName", "location"],
  };
  const { places } = await google.maps.places.Place.findPlaceFromPhoneNumber(
    request
  );

  if (places.length) {
    const place = places[0];
    const markerView = new google.maps.marker.AdvancedMarkerView({
      map,
      position: place.location,
      title: place.displayName,
    });

    console.log(place.displayName);
  } else {
    console.log("No results");
  }
}

window.initMap = initMap;
// [END maps_place_class]

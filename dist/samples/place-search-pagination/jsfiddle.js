"use strict";

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPJpjD-qcR_yIxJnS8maR5W9KB0E3EzYI&libraries=places">
function initMap() {
  // Create the map.
  const pyrmont = {
    lat: -33.866,
    lng: 151.196
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: pyrmont,
    zoom: 17
  }); // Create the places service.

  const service = new google.maps.places.PlacesService(map);
  let getNextPage;
  const moreButton = document.getElementById("more");

  moreButton.onclick = function() {
    moreButton.disabled = true;

    if (getNextPage) {
      getNextPage();
    }
  }; // Perform a nearby search.

  service.nearbySearch(
    {
      location: pyrmont,
      radius: 500,
      type: "store"
    },
    (results, status, pagination) => {
      if (status !== "OK") return;
      createMarkers(results, map);
      moreButton.disabled = !pagination.hasNextPage;

      if (pagination.hasNextPage) {
        getNextPage = pagination.nextPage;
      }
    }
  );
}

function createMarkers(places, map) {
  const bounds = new google.maps.LatLngBounds();
  const placesList = document.getElementById("places");

  for (let i = 0, place; (place = places[i]); i++) {
    const image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    new google.maps.Marker({
      map,
      icon: image,
      title: place.name,
      position: place.geometry.location
    });
    const li = document.createElement("li");
    li.textContent = place.name;
    placesList.appendChild(li);
    bounds.extend(place.geometry.location);
  }

  map.fitBounds(bounds);
}

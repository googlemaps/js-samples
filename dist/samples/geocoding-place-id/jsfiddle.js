"use strict";

// Initialize the map.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: {
      lat: 40.72,
      lng: -73.96
    }
  });
  const geocoder = new google.maps.Geocoder();
  const infowindow = new google.maps.InfoWindow();
  document.getElementById("submit").addEventListener("click", () => {
    geocodePlaceId(geocoder, map, infowindow);
  });
} // This function is called when the user clicks the UI button requesting
// a geocode of a place ID.

function geocodePlaceId(geocoder, map, infowindow) {
  const placeId = document.getElementById("place-id").value;
  geocoder.geocode(
    {
      placeId: placeId
    },
    (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          map.setZoom(11);
          map.setCenter(results[0].geometry.location);
          const marker = new google.maps.Marker({
            map,
            position: results[0].geometry.location
          });
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert("No results found");
        }
      } else {
        window.alert("Geocoder failed due to: " + status);
      }
    }
  );
}

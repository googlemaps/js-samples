"use strict";

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: {
      lat: 63.333,
      lng: -150.5,
    },
    mapTypeId: "terrain",
  });
  const elevator = new google.maps.ElevationService();
  const infowindow = new google.maps.InfoWindow({});
  infowindow.open(map); // Add a listener for the click event. Display the elevation for the LatLng of
  // the click inside the infowindow.

  map.addListener("click", (event) => {
    displayLocationElevation(event.latLng, elevator, infowindow);
  });
}

function displayLocationElevation(location, elevator, infowindow) {
  // Initiate the location request
  elevator.getElevationForLocations(
    {
      locations: [location],
    },
    (results, status) => {
      infowindow.setPosition(location);

      if (status === "OK") {
        // Retrieve the first result
        if (results[0]) {
          // Open the infowindow indicating the elevation at the clicked position.
          infowindow.setContent(
            "The elevation at this point <br>is " +
              results[0].elevation +
              " meters."
          );
        } else {
          infowindow.setContent("No results found");
        }
      } else {
        infowindow.setContent("Elevation service failed due to: " + status);
      }
    }
  );
}

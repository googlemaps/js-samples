"use strict";

// This example uses a GroundOverlay to place an image on the map
// showing an antique map of Newark, NJ.
let historicalOverlay;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: {
      lat: 40.74,
      lng: -74.18
    }
  });
  const imageBounds = {
    north: 40.773941,
    south: 40.712216,
    east: -74.12544,
    west: -74.22655
  };
  historicalOverlay = new google.maps.GroundOverlay(
    "https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
    imageBounds
  );
  historicalOverlay.setMap(map);
}

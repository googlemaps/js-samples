"use strict";

// This example uses a symbol to add a vector-based icon to a marker.
// The symbol uses one of the predefined vector paths ('CIRCLE') supplied by the
// Google Maps JavaScript API.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: -25.363882,
      lng: 131.044922
    }
  });
  new google.maps.Marker({
    position: map.getCenter(),
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10
    },
    draggable: true,
    map: map
  });
}

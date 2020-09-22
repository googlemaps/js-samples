"use strict";

// This example uses SVG path notation to add a vector-based symbol
// as the icon for a marker. The resulting icon is a star-shaped symbol
// with a pale yellow fill and a thick yellow border.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: {
      lat: -25.363882,
      lng: 131.044922,
    },
  });
  const goldStar = {
    path:
      "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
    fillColor: "yellow",
    fillOpacity: 0.8,
    scale: 1,
    strokeColor: "gold",
    strokeWeight: 14,
  };
  new google.maps.Marker({
    position: map.getCenter(),
    icon: goldStar,
    map: map,
  });
}

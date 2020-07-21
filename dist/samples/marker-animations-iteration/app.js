"use strict";

// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.
const neighborhoods = [
  {
    lat: 52.511,
    lng: 13.447
  },
  {
    lat: 52.549,
    lng: 13.422
  },
  {
    lat: 52.497,
    lng: 13.396
  },
  {
    lat: 52.517,
    lng: 13.394
  }
];
let markers = [];
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {
      lat: 52.52,
      lng: 13.41
    }
  });
}

function drop() {
  clearMarkers();

  for (let i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(
      new google.maps.Marker({
        position: position,
        map,
        animation: google.maps.Animation.DROP
      })
    );
  }, timeout);
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }

  markers = [];
}

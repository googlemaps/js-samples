"use strict";

let map;
let maxZoomService;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      lat: 35.6894,
      lng: 139.692
    },
    mapTypeId: "hybrid"
  });
  infoWindow = new google.maps.InfoWindow();
  maxZoomService = new google.maps.MaxZoomService();
  map.addListener("click", showMaxZoom);
}

function showMaxZoom(e) {
  maxZoomService.getMaxZoomAtLatLng(e.latLng, function(result) {
    if (result.status !== "OK") {
      infoWindow.setContent("Error in MaxZoomService");
    } else {
      infoWindow.setContent(
        "The maximum zoom at this location is: " + result.zoom
      );
    }

    infoWindow.setPosition(e.latLng);
    infoWindow.open(map);
  });
}

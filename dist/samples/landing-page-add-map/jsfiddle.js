"use strict";

function initMap() {
  const uluru = {
    lat: -25.363,
    lng: 131.044,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    scrollwheel: false,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

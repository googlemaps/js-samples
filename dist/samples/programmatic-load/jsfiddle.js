"use strict";

let map;
const loader = new google.maps.plugins.loader.Loader({
  apiKey: "AIzaSyCb1xprYSpXd0q_yDsJ1W2UGhfl9_YGKU0",
  version: "weekly"
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
});

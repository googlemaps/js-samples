"use strict";

let map;
const loader = new google.maps.plugins.loader.Loader({
  apiKey: "AIzaSyCPJpjD-qcR_yIxJnS8maR5W9KB0E3EzYI",
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

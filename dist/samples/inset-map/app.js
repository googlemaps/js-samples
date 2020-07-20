"use strict";

let map, overview;
const OVERVIEW_DIFFERENCE = 5;
const OVERVIEW_MIN_ZOOM = 3;
const OVERVIEW_MAX_ZOOM = 10;

function initMap() {
  const mapOptions = {
    center: {
      lat: 50,
      lng: 8
    },
    zoom: 7
  }; // instantiate the primary map

  map = new google.maps.Map(document.getElementById("map"), { ...mapOptions }); // instantiate the overview map without controls

  overview = new google.maps.Map(document.getElementById("overview"), {
    ...mapOptions,
    disableDefaultUI: true,
    gestureHandling: "none",
    zoomControl: false
  });

  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  map.addListener("bounds_changed", () => {
    overview.setCenter(map.getCenter());
    overview.setZoom(
      clamp(
        map.getZoom() - OVERVIEW_DIFFERENCE,
        OVERVIEW_MIN_ZOOM,
        OVERVIEW_MAX_ZOOM
      )
    );
  });
}

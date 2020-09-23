"use strict";

// Initialize and add the side by side maps
function initMap() {
  const sharedOptions = {
    center: {
      lat: 47.609414458375674,
      lng: -122.33897030353548,
    },
    zoom: 17,
    disableDefaultUI: true,
    gestureHandling: "none",
  };
  new google.maps.Map(document.getElementById("left"), {
    ...sharedOptions,
    mapId: "ed1309c122a3dfcb",
    useStaticMap: false,
  });
  new google.maps.Map(
    document.getElementById("right"),
    { ...sharedOptions, mapId: "ed1309c122a3dfcb", useStaticMap: true } // TODO(jpoehnelt) add mapId to @types/googlemaps
  );
}

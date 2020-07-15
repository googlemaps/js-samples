(function(exports) {
  "use strict";

  // In the following example, markers appear when the user clicks on the map.
  // The markers are stored in an array.
  // The user can then click an option to hide, show or delete the markers.
  let map;

  function initMap() {
    const haightAshbury = {
      lat: 37.769,
      lng: -122.446
    };
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: haightAshbury,
      mapTypeId: "terrain"
    }); // This event listener will call addMarker() when the map is clicked.

    map.addListener("click", function(event) {
      addMarker(event.latLng);
    }); // Adds a marker at the center of the map.

    addMarker(haightAshbury);
  } // Adds a marker to the map and push to the array.

  function addMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
  } // Sets the map on all markers in the array.

  exports.initMap = initMap;
})((this.window = this.window || {}));

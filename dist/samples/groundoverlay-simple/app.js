(function(exports) {
  "use strict";

  // This example uses a GroundOverlay to place an image on the map
  // showing an antique map of Newark, NJ.

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: {
        lat: 40.74,
        lng: -74.18
      }
    });
    var imageBounds = {
      north: 40.773941,
      south: 40.712216,
      east: -74.12544,
      west: -74.22655
    };
    exports.historicalOverlay = new google.maps.GroundOverlay(
      "https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
      imageBounds
    );
    exports.historicalOverlay.setMap(map);
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

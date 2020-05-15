(function(exports) {
  "use strict";

  // This example adds a UI control allowing users to remove the
  // ground overlay from the map.

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
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
    addOverlay();
  }

  function addOverlay() {
    exports.historicalOverlay.setMap(exports.map);
  }

  function removeOverlay() {
    exports.historicalOverlay.setMap(null);
  }

  exports.addOverlay = addOverlay;
  exports.initMap = initMap;
  exports.removeOverlay = removeOverlay;
})((this.window = this.window || {}));

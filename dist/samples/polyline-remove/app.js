(function(exports) {
  "use strict";

  // This example adds a UI control allowing users to remove the polyline from the
  // map.

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {
        lat: 0,
        lng: -180
      },
      mapTypeId: "terrain"
    });
    var flightPathCoordinates = [
      {
        lat: 37.772,
        lng: -122.214
      },
      {
        lat: 21.291,
        lng: -157.821
      },
      {
        lat: -18.142,
        lng: 178.431
      },
      {
        lat: -27.467,
        lng: 153.027
      }
    ];
    exports.flightPath = new google.maps.Polyline({
      path: flightPathCoordinates,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    addLine();
  }

  function addLine() {
    exports.flightPath.setMap(exports.map);
  }

  function removeLine() {
    exports.flightPath.setMap(null);
  }

  exports.addLine = addLine;
  exports.initMap = initMap;
  exports.removeLine = removeLine;
})((this.window = this.window || {}));

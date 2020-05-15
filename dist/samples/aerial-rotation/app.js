(function(exports) {
  "use strict";

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 45.518,
        lng: -122.672
      },
      zoom: 18,
      mapTypeId: "satellite",
      heading: 90,
      tilt: 45
    });
  }

  function rotate90() {
    var heading = exports.map.getHeading() || 0;
    exports.map.setHeading(heading + 90);
  }

  function autoRotate() {
    // Determine if we're showing aerial imagery.
    if (exports.map.getTilt() !== 0) {
      window.setInterval(rotate90, 3000);
    }
  }

  exports.autoRotate = autoRotate;
  exports.initMap = initMap;
  exports.rotate90 = rotate90;
})((this.window = this.window || {}));

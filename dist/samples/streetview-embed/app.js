(function(exports) {
  "use strict";

  function initialize() {
    exports.panorama = new google.maps.StreetViewPanorama(
      document.getElementById("street-view"),
      {
        position: {
          lat: 37.86926,
          lng: -122.254811
        },
        pov: {
          heading: 165,
          pitch: 0
        },
        zoom: 1
      }
    );
  }

  exports.initialize = initialize;
})((this.window = this.window || {}));

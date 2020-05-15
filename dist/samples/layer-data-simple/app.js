(function(exports) {
  "use strict";

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -28,
        lng: 137
      }
    }); // NOTE: This uses cross-domain XHR, and may not work on older browsers.

    exports.map.data.loadGeoJson(
      "https://storage.googleapis.com/mapsdevsite/json/google.json"
    );
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

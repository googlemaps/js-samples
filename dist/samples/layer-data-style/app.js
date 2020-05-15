(function(exports) {
  "use strict";

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -28,
        lng: 137
      }
    }); // Load GeoJSON.

    exports.map.data.loadGeoJson(
      "https://storage.googleapis.com/mapsdevsite/json/google.json"
    ); // Set the stroke width, and fill color for each polygon

    exports.map.data.setStyle({
      fillColor: "green",
      strokeWeight: 1
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

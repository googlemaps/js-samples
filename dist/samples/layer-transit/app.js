(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: {
        lat: 51.501904,
        lng: -0.115871
      }
    });
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

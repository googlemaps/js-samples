(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: {
        lat: 34.04924594193164,
        lng: -118.24104309082031
      }
    });
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: {
        lat: 42.3726399,
        lng: -71.1096528
      }
    });
    var bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

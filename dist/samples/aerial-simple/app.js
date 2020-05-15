(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 36.964,
        lng: -122.015
      },
      zoom: 18,
      mapTypeId: "satellite"
    });
    map.setTilt(45);
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

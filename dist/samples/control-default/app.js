(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

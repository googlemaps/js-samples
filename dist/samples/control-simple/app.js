(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -33,
        lng: 151
      },
      zoomControl: false,
      scaleControl: true
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

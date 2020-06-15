(function(exports) {
  "use strict";

  function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "8e0a97af9386fef",
      center: {
        lat: 48.85,
        lng: 2.35
      },
      zoom: 12
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

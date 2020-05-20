(function(exports) {
  "use strict";

  function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "8e0a97af9386fef",
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 4
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

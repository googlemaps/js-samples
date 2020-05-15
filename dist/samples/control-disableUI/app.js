(function(exports) {
  "use strict";

  // [START maps_control_disableUI]
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -33,
        lng: 151
      },
      disableDefaultUI: true
    });
  } // [END maps_control_disableUI]

  exports.initMap = initMap;
})((this.window = this.window || {}));

(function(exports) {
  "use strict";

  // You can set control options to change the default position or style of many
  // of the map controls.
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -33,
        lng: 151
      },
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ["roadmap", "terrain"]
      }
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

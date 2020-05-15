(function(exports) {
  "use strict";

  function initMap() {
    var originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: originalMapCenter
    });
    var infowindow = new google.maps.InfoWindow({
      content: "Change the zoom level",
      position: originalMapCenter
    });
    infowindow.open(map);
    map.addListener("zoom_changed", function() {
      infowindow.setContent("Zoom: " + map.getZoom());
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

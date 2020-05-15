(function(exports) {
  "use strict";

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: {
        lat: 35.6894,
        lng: 139.692
      },
      mapTypeId: "hybrid"
    });
    exports.infoWindow = new google.maps.InfoWindow();
    exports.maxZoomService = new google.maps.MaxZoomService();
    exports.map.addListener("click", showMaxZoom);
  }

  function showMaxZoom(e) {
    exports.maxZoomService.getMaxZoomAtLatLng(e.latLng, function(response) {
      if (response.status !== "OK") {
        exports.infoWindow.setContent("Error in MaxZoomService");
      } else {
        exports.infoWindow.setContent(
          "The maximum zoom at this location is: " + response.zoom
        );
      }

      exports.infoWindow.setPosition(e.latLng);
      exports.infoWindow.open(exports.map);
    });
  }

  exports.initMap = initMap;
  exports.showMaxZoom = showMaxZoom;
})((this.window = this.window || {}));

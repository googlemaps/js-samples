(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -25.363882,
        lng: 131.044922
      }
    });
    map.addListener("click", function(e) {
      placeMarkerAndPanTo(e.latLng, map);
    });
  }

  function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    map.panTo(latLng);
  }

  exports.initMap = initMap;
  exports.placeMarkerAndPanTo = placeMarkerAndPanTo;
})((this.window = this.window || {}));

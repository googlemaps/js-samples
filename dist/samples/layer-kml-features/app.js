(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: {
        lat: 37.06,
        lng: -95.68
      }
    });
    var kmlLayer = new google.maps.KmlLayer({
      url:
        "http://googlemaps.github.io/kml-samples/kml/Placemark/placemark.kml",
      suppressInfoWindows: true,
      map: map
    });
    kmlLayer.addListener("click", function(kmlEvent) {
      var text = kmlEvent.featureData.description;
      showInContentWindow(text);
    });

    function showInContentWindow(text) {
      var sidediv = document.getElementById("content-window");
      sidediv.innerHTML = text;
    }
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

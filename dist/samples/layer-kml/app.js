(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: {
        lat: 41.876,
        lng: -87.624
      }
    });
    var ctaLayer = new google.maps.KmlLayer({
      url: "https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml",
      map: map
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

(function(exports) {
  "use strict";

  // This example adds a marker to indicate the position of Bondi Beach in Sydney,
  // Australia.
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -33,
        lng: 151
      }
    });
    var image =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    var beachMarker = new google.maps.Marker({
      position: {
        lat: -33.89,
        lng: 151.274
      },
      map: map,
      icon: image
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

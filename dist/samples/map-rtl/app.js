(function(exports) {
  "use strict";

  // This example displays a map with the language set to Arabic and the
  // regions set to Egypt. These settings are specified in the HTML script
  // element when loading the Google Maps JavaScript API.
  // Setting the language shows the map in the language of your choice.
  // Setting the region biases the geocoding results to that region.
  // In addition, the page's html element sets the text direction to
  // right-to-left.
  function initMap() {
    var cairo = {
      lat: 30.064742,
      lng: 31.249509
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      scaleControl: true,
      center: cairo,
      zoom: 10
    });
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent("<b>القاهرة</b>");
    var marker = new google.maps.Marker({
      map: map,
      position: cairo
    });
    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

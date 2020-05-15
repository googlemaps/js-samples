(function(exports) {
  "use strict";

  /**
   * This sample sets the gesture handling mode to 'cooperative',
   * which means that on a mobile device, the user must swipe with one
   * finger to scroll the page and two fingers to pan the map.
   */
  function initMap() {
    var myLatLng = {
      lat: -25.363,
      lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
      gestureHandling: "cooperative"
    });
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hello World!"
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

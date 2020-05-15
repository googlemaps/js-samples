(function(exports) {
  "use strict";

  // [START maps_event_domListener]
  function initMap() {
    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644)
    }); // We add a DOM event here to show an alert if the DIV containing the
    // map is clicked.

    google.maps.event.addDomListener(mapDiv, "click", function() {
      window.alert("Map was clicked!");
    });
  } // [END maps_event_domListener]

  exports.initMap = initMap;
})((this.window = this.window || {}));

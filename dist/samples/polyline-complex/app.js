(function(exports) {
  "use strict";

  // This example creates an interactive map which constructs a polyline based on
  // user clicks. Note that the polyline only appears once its path property
  // contains two LatLng coordinates.

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: {
        lat: 41.879,
        lng: -87.624
      } // Center the map on Chicago, USA.
    });
    exports.poly = new google.maps.Polyline({
      strokeColor: "#000000",
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    exports.poly.setMap(exports.map); // Add a listener for the click event

    exports.map.addListener("click", addLatLng);
  } // Handles click events on a map, and adds a new point to the Polyline.

  function addLatLng(event) {
    var path = exports.poly.getPath(); // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.

    path.push(event.latLng); // Add a new marker at the new plotted point on the polyline.

    var marker = new google.maps.Marker({
      position: event.latLng,
      title: "#" + path.getLength(),
      map: exports.map
    });
  }

  exports.addLatLng = addLatLng;
  exports.initMap = initMap;
})((this.window = this.window || {}));

(function(exports) {
  "use strict";

  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

  function initMap() {
    var sydney = new google.maps.LatLng(-33.867, 151.195);
    exports.infowindow = new google.maps.InfoWindow();
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: sydney,
      zoom: 15
    });
    var request = {
      query: "Museum of Contemporary Art Australia",
      fields: ["name", "geometry"]
    };
    exports.service = new google.maps.places.PlacesService(exports.map);
    exports.service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }

        exports.map.setCenter(results[0].geometry.location);
      }
    });
  }

  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: exports.map,
      position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", function() {
      exports.infowindow.setContent(place.name);
      exports.infowindow.open(exports.map, this);
    });
  }

  exports.createMarker = createMarker;
  exports.initMap = initMap;
})((this.window = this.window || {}));

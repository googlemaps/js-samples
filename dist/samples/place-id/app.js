(function(exports) {
  "use strict";

  function initMap() {
    // Create a map centered in Pyrmont, Sydney (Australia).
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -33.8666,
        lng: 151.1958
      },
      zoom: 15
    }); // Search for Google's office in Australia.

    var request = {
      location: exports.map.getCenter(),
      radius: "500",
      query: "Google Sydney"
    };
    var service = new google.maps.places.PlacesService(exports.map);
    service.textSearch(request, callback);
  } // Checks that the PlacesServiceStatus is OK, and adds a marker
  // using the place ID and location from the PlacesService.

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: exports.map,
        place: {
          placeId: results[0].place_id,
          location: results[0].geometry.location
        }
      });
    }
  }

  exports.callback = callback;
  exports.initMap = initMap;
})((this.window = this.window || {}));

(function(exports) {
  "use strict";

  // This sample requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script
  // src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -33.8688,
        lng: 151.2195
      },
      zoom: 13
    });
    var input = document.getElementById("pac-input");
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map); // Specify just the place data fields that you need.

    autocomplete.setFields([
      "place_id",
      "geometry",
      "name",
      "formatted_address"
    ]);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    var geocoder = new google.maps.Geocoder();
    var marker = new google.maps.Marker({
      map: map
    });
    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
    autocomplete.addListener("place_changed", function() {
      infowindow.close();
      var place = autocomplete.getPlace();

      if (!place.place_id) {
        return;
      }

      geocoder.geocode(
        {
          placeId: place.place_id
        },
        function(results, status) {
          if (status !== "OK") {
            window.alert("Geocoder failed due to: " + status);
            return;
          }

          map.setZoom(11);
          map.setCenter(results[0].geometry.location); // Set the position of the marker using the place ID and location.

          marker.setPlace({
            placeId: place.place_id,
            location: results[0].geometry.location
          });
          marker.setVisible(true);
          infowindowContent.children["place-name"].textContent = place.name;
          infowindowContent.children["place-id"].textContent = place.place_id;
          infowindowContent.children["place-address"].textContent =
            results[0].formatted_address;
          infowindow.open(map, marker);
        }
      );
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

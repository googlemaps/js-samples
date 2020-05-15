(function(exports) {
  "use strict";

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -24.345,
        lng: 134.46
      } // Australia.
    });
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map: map,
      panel: document.getElementById("right-panel")
    });
    directionsRenderer.addListener("directions_changed", function() {
      computeTotalDistance(directionsRenderer.getDirections());
    });
    displayRoute(
      "Perth, WA",
      "Sydney, NSW",
      directionsService,
      directionsRenderer
    );
  }

  function displayRoute(origin, destination, service, display) {
    service.route(
      {
        origin: origin,
        destination: destination,
        waypoints: [
          {
            location: "Adelaide, SA"
          },
          {
            location: "Broken Hill, NSW"
          }
        ],
        travelMode: "DRIVING",
        avoidTolls: true
      },
      function(response, status) {
        if (status === "OK") {
          display.setDirections(response);
        } else {
          alert("Could not display directions due to: " + status);
        }
      }
    );
  }

  function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];

    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }

    total = total / 1000;
    document.getElementById("total").innerHTML = total + " km";
  }

  exports.computeTotalDistance = computeTotalDistance;
  exports.displayRoute = displayRoute;
  exports.initMap = initMap;
})((this.window = this.window || {}));

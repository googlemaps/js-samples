(function(exports) {
  "use strict";

  function initMap() {
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: {
        lat: 41.85,
        lng: -87.65
      }
    });
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("right-panel"));
    var control = document.getElementById("floating-panel");
    control.style.display = "block";
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function onChangeHandler() {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };

    document
      .getElementById("start")
      .addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);
  }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: "DRIVING"
      },
      function(response, status) {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  exports.calculateAndDisplayRoute = calculateAndDisplayRoute;
  exports.initMap = initMap;
})((this.window = this.window || {}));

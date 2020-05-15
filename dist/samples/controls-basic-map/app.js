(function(exports) {
  "use strict";

  function initMap() {
    var locationRio = {
      lat: -22.915,
      lng: -43.197
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: locationRio,
      gestureHandling: "greedy"
    });
    var marker = new google.maps.Marker({
      position: locationRio,
      map: map,
      title: "Hello World!"
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

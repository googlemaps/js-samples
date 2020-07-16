(function(exports) {
  "use strict";

  function initMap() {
    const locationRio = {
      lat: -22.915,
      lng: -43.197
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: locationRio,
      gestureHandling: "none",
      zoomControl: false
    });
    const marker = new google.maps.Marker({
      position: locationRio,
      map,
      title: "Hello World!"
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

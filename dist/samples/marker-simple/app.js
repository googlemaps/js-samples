(function(exports) {
  "use strict";

  function initMap() {
    const myLatLng = {
      lat: -25.363,
      lng: 131.044
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng
    });
    const marker = new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!"
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

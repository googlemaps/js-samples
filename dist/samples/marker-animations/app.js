(function(exports) {
  "use strict";

  // The following example creates a marker in Stockholm, Sweden using a DROP
  // animation. Clicking on the marker will toggle the animation between a BOUNCE
  // animation and no animation.

  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: {
        lat: 59.325,
        lng: 18.07
      }
    });
    exports.marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {
        lat: 59.327,
        lng: 18.067
      }
    });
    exports.marker.addListener("click", toggleBounce);
  }

  function toggleBounce() {
    if (exports.marker.getAnimation() !== null) {
      exports.marker.setAnimation(null);
    } else {
      exports.marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  exports.initMap = initMap;
  exports.toggleBounce = toggleBounce;
})((this.window = this.window || {}));

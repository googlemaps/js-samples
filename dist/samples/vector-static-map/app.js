(function(exports) {
  "use strict";

  // Initialize and add the side by side maps
  function initMap() {
    const sharedOptions = {
      mapId: "ed1309c122a3dfcb",
      center: {
        lat: 47.609414458375674,
        lng: -122.33897030353548
      },
      zoom: 17,
      disableDefaultUI: true,
      gestureHandling: "none"
    };
    new google.maps.Map(document.getElementById("dynamic"), {
      ...sharedOptions,
      useStaticMap: false
    });
    new google.maps.Map(document.getElementById("static"), {
      ...sharedOptions,
      useStaticMap: true
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

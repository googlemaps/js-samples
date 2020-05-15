(function(exports) {
  "use strict";

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -33.86,
        lng: 151.209
      },
      zoom: 13,
      mapTypeControl: false
    }); // Add controls to the map, allowing users to hide/show features.

    var styleControl = document.getElementById("style-selector-control");
    exports.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      styleControl
    ); // Apply new JSON when the user chooses to hide/show features.

    document.getElementById("hide-poi").addEventListener("click", function() {
      exports.map.setOptions({
        styles: styles["hide"]
      });
    });
    document.getElementById("show-poi").addEventListener("click", function() {
      exports.map.setOptions({
        styles: styles["default"]
      });
    });
  }

  var styles = {
    default: null,
    hide: [
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      }
    ]
  };

  exports.initMap = initMap;
  exports.styles = styles;
})((this.window = this.window || {}));

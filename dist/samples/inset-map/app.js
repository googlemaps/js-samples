(function(exports) {
  "use strict";

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }

    return target;
  }

  var map, overview;
  var OVERVIEW_DIFFERENCE = 5;
  var OVERVIEW_MIN_ZOOM = 3;
  var OVERVIEW_MAX_ZOOM = 10;

  function initMap() {
    var mapOptions = {
      center: {
        lat: 50,
        lng: 8
      },
      zoom: 7
    }; // instantiate the primary map

    map = new google.maps.Map(
      document.getElementById("map"),
      _objectSpread2({}, mapOptions)
    ); // instantiate the overview map without controls

    overview = new google.maps.Map(
      document.getElementById("overview"),
      _objectSpread2(
        _objectSpread2({}, mapOptions),
        {},
        {
          disableDefaultUI: true,
          gestureHandling: "none",
          zoomControl: false
        }
      )
    );

    function clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }

    map.addListener("bounds_changed", function() {
      overview.setCenter(map.getCenter());
      overview.setZoom(
        clamp(
          map.getZoom() - OVERVIEW_DIFFERENCE,
          OVERVIEW_MIN_ZOOM,
          OVERVIEW_MAX_ZOOM
        )
      );
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

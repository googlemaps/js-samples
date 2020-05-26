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

  function initMap() {
    var mapOptions = {
      center: {
        lat: 44.5250489,
        lng: -110.83819
      },
      zoom: 18,
      scaleControl: false,
      streetViewControl: false
    }; // instantiate the map on the left with control positioning

    exports.mapLeft = new google.maps.Map(
      document.getElementById("map-left"),
      _objectSpread2(
        _objectSpread2({}, mapOptions),
        {},
        {
          mapTypeId: "satellite",
          tilt: 0,
          // at high zoom levels we need to maintain the same projection
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
          },
          mapTypeControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
          },
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
          }
        }
      )
    ); // instantiate the map on the right with control positioning

    exports.mapRight = new google.maps.Map(
      document.getElementById("map-right"),
      _objectSpread2(
        _objectSpread2({}, mapOptions),
        {},
        {
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          mapTypeControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
          },
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          }
        }
      )
    ); // helper function to keep maps in sync

    function sync() {
      for (
        var _len = arguments.length, maps = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        maps[_key] = arguments[_key];
      }

      var center, zoom;

      function update(ignore) {
        maps.forEach(function(m) {
          if (m === ignore) {
            return;
          }

          m.setCenter(center);
          m.setZoom(zoom);
        });
      }

      maps.forEach(function(m) {
        m.addListener("bounds_changed", function() {
          var changedCenter = m.getCenter();
          var changedZoom = m.getZoom();

          if (changedCenter !== center || changedZoom !== zoom) {
            center = changedCenter;
            zoom = changedZoom;
            update(m);
          }
        });
      });
    }

    sync(exports.mapLeft, exports.mapRight);

    function handleContainerResize() {
      var width = document.getElementById("container").offsetWidth;
      console.log(width);
      document.getElementById("map-left").style.width = "".concat(width, "px");
      document.getElementById("map-right").style.width = "".concat(width, "px");
    } // trigger to set map container size since using absolute

    handleContainerResize(); // add event listener

    window.addEventListener("resize", handleContainerResize);
    Split(["#left", "#right"], {
      sizes: [50, 50]
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

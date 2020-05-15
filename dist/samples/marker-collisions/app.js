(function(exports) {
  "use strict";

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    );
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }

  // Initialize and add the map

  function initMap() {
    var markers = [];
    var collisionBehavior = google.maps.CollisionBehavior.REQUIRED;
    exports.map = new google.maps.Map(document.getElementById("map"), {
      mapId: "3a3b33f0edd6ed2a",
      center: {
        lat: 47.609414458375674,
        lng: -122.33897030353548
      },
      zoom: 17
    });
    var menuList = document.querySelector(".mdc-list"); // Add the behaviors to the select options

    for (
      var _i = 0,
        _Object$entries = Object.entries(google.maps.CollisionBehavior);
      _i < _Object$entries.length;
      _i++
    ) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

      var item = document.createElement("LI");
      item.classList.add("mdc-list-item");
      item.setAttribute("data-value", key);
      var itemText = document.createElement("SPAN");
      itemText.classList.add("mdc-list-item__text");
      itemText.innerText = value;
      item.appendChild(itemText);
      menuList.appendChild(item);
    }

    exports.select = new mdc.select.MDCSelect(
      document.querySelector(".mdc-select")
    );
    exports.select.listen("MDCSelect:change", function() {
      collisionBehavior = exports.select.value;
      markers.forEach(function(marker) {
        marker.set("collisionBehavior", collisionBehavior);
      });
    });
    exports.select.value = collisionBehavior; // Create some markers on the map

    markers = [
      [-122.3402, 47.6093],
      [-122.3402, 47.6094],
      [-122.3403, 47.6094],
      [-122.3384, 47.6098],
      [-122.3389, 47.6095],
      [-122.3396, 47.6095],
      [-122.3379, 47.6097],
      [-122.3378, 47.6097],
      [-122.3396, 47.6091],
      [-122.3383, 47.6089],
      [-122.3379, 47.6093],
      [-122.3381, 47.6095],
      [-122.3378, 47.6095]
    ].map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        lng = _ref2[0],
        lat = _ref2[1];

      return new google.maps.Marker({
        position: new google.maps.LatLng({
          lat: lat,
          lng: lng
        }),
        map: exports.map,
        collisionBehavior: collisionBehavior
      });
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

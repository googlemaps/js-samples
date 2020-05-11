(function(exports) {
  "use strict";

  var fails = function(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty

  var descriptors = !fails(function() {
    return (
      Object.defineProperty({}, 1, {
        get: function() {
          return 7;
        }
      })[1] != 7
    );
  });

  var commonjsGlobal =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : typeof self !== "undefined"
      ? self
      : {};

  var check = function(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

  var global_1 = // eslint-disable-next-line no-undef
    check(typeof globalThis == "object" && globalThis) ||
    check(typeof window == "object" && window) ||
    check(typeof self == "object" && self) ||
    check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func
    Function("return this")();

  var isObject = function(it) {
    return typeof it === "object" ? it !== null : typeof it === "function";
  };

  var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function(it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty

  var ie8DomDefine =
    !descriptors &&
    !fails(function() {
      return (
        Object.defineProperty(documentCreateElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7
      );
    });

  var anObject = function(it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + " is not an object");
    }

    return it;
  };

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var toPrimitive = function(input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (
      PREFERRED_STRING &&
      typeof (fn = input.toString) == "function" &&
      !isObject((val = fn.call(input)))
    )
      return val;
    if (
      typeof (fn = input.valueOf) == "function" &&
      !isObject((val = fn.call(input)))
    )
      return val;
    if (
      !PREFERRED_STRING &&
      typeof (fn = input.toString) == "function" &&
      !isObject((val = fn.call(input)))
    )
      return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty

  var f = descriptors
    ? nativeDefineProperty
    : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (ie8DomDefine)
          try {
            return nativeDefineProperty(O, P, Attributes);
          } catch (error) {
            /* empty */
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError("Accessors not supported");
        if ("value" in Attributes) O[P] = Attributes.value;
        return O;
      };

  var objectDefineProperty = {
    f: f
  };

  var defineProperty = objectDefineProperty.f;

  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = "name"; // Function instances `.name` property
  // https://tc39.github.io/ecma262/#sec-function-instances-name

  if (descriptors && !(NAME in FunctionPrototype)) {
    defineProperty(FunctionPrototype, NAME, {
      configurable: true,
      get: function() {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return "";
        }
      }
    });
  }

  /*
   * Copyright 2019 Google LLC. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

  function initMap() {
    // Create the map.
    var pyrmont = {
      lat: -33.866,
      lng: 151.196
    };
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: pyrmont,
      zoom: 17
    }); // Create the places service.

    var service = new google.maps.places.PlacesService(exports.map);
    var getNextPage = null;
    var moreButton = document.getElementById("more");

    moreButton.onclick = function() {
      moreButton.disabled = true;
      if (getNextPage) getNextPage();
    }; // Perform a nearby search.

    service.nearbySearch(
      {
        location: pyrmont,
        radius: 500,
        type: ["store"]
      },
      function(results, status, pagination) {
        if (status !== "OK") return;
        createMarkers(results);
        moreButton.disabled = !pagination.hasNextPage;

        getNextPage =
          pagination.hasNextPage &&
          function() {
            pagination.nextPage();
          };
      }
    );
  }

  function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    var placesList = document.getElementById("places");

    for (var i = 0, place; (place = places[i]); i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      var marker = new google.maps.Marker({
        map: exports.map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });
      var li = document.createElement("li");
      li.textContent = place.name;
      placesList.appendChild(li);
      bounds.extend(place.geometry.location);
    }

    exports.map.fitBounds(bounds);
  }

  exports.createMarkers = createMarkers;
  exports.initMap = initMap;
})((this.window = this.window || {}));

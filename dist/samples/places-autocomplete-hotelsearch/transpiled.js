(function(exports) {
  "use strict";
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
  // This example uses the autocomplete feature of the Google Places API.
  // It allows the user to find all hotels in a given place, within a given
  // country. It then displays markers for all the hotels returned,
  // with on-click details for each hotel.
  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

  var places, infoWindow;
  exports.markers = [];
  var countryRestrict = {
    country: "us"
  };
  var MARKER_PATH =
    "https://developers.google.com/maps/documentation/javascript/images/marker_green";
  var hostnameRegexp = new RegExp("^https?://.+?/");
  var countries = {
    au: {
      center: {
        lat: -25.3,
        lng: 133.8
      },
      zoom: 4
    },
    br: {
      center: {
        lat: -14.2,
        lng: -51.9
      },
      zoom: 3
    },
    ca: {
      center: {
        lat: 62,
        lng: -110.0
      },
      zoom: 3
    },
    fr: {
      center: {
        lat: 46.2,
        lng: 2.2
      },
      zoom: 5
    },
    de: {
      center: {
        lat: 51.2,
        lng: 10.4
      },
      zoom: 5
    },
    mx: {
      center: {
        lat: 23.6,
        lng: -102.5
      },
      zoom: 4
    },
    nz: {
      center: {
        lat: -40.9,
        lng: 174.9
      },
      zoom: 5
    },
    it: {
      center: {
        lat: 41.9,
        lng: 12.6
      },
      zoom: 5
    },
    za: {
      center: {
        lat: -30.6,
        lng: 22.9
      },
      zoom: 5
    },
    es: {
      center: {
        lat: 40.5,
        lng: -3.7
      },
      zoom: 5
    },
    pt: {
      center: {
        lat: 39.4,
        lng: -8.2
      },
      zoom: 6
    },
    us: {
      center: {
        lat: 37.1,
        lng: -95.7
      },
      zoom: 3
    },
    uk: {
      center: {
        lat: 54.8,
        lng: -4.6
      },
      zoom: 5
    }
  };

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: countries["us"].zoom,
      center: countries["us"].center,
      mapTypeControl: false,
      panControl: false,
      zoomControl: false,
      streetViewControl: false
    });
    infoWindow = new google.maps.InfoWindow({
      content: document.getElementById("info-content")
    }); // Create the autocomplete object and associate it with the UI input control.
    // Restrict the search to the default country, and to place type "cities".

    exports.autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */
      document.getElementById("autocomplete"),
      {
        types: ["(cities)"],
        componentRestrictions: countryRestrict
      }
    );
    places = new google.maps.places.PlacesService(exports.map);
    exports.autocomplete.addListener("place_changed", onPlaceChanged); // Add a DOM event listener to react when the user selects a country.

    document
      .getElementById("country")
      .addEventListener("change", setAutocompleteCountry);
  } // When the user selects a city, get the place details for the city and
  // zoom the map in on the city.

  function onPlaceChanged() {
    var place = exports.autocomplete.getPlace();

    if (place.geometry) {
      exports.map.panTo(place.geometry.location);
      exports.map.setZoom(15);
      search();
    } else {
      document.getElementById("autocomplete").placeholder = "Enter a city";
    }
  } // Search for hotels in the selected city, within the viewport of the map.

  function search() {
    var search = {
      bounds: exports.map.getBounds(),
      types: ["lodging"]
    };
    places.nearbySearch(search, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        clearResults();
        clearMarkers(); // Create a marker for each hotel found, and
        // assign a letter of the alphabetic to each marker icon.

        for (var i = 0; i < results.length; i++) {
          var markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
          var markerIcon = MARKER_PATH + markerLetter + ".png"; // Use marker animation to drop the icons incrementally on the map.

          exports.markers[i] = new google.maps.Marker({
            position: results[i].geometry.location,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
          }); // If the user clicks a hotel marker, show the details of that hotel
          // in an info window.

          exports.markers[i].placeResult = results[i];
          google.maps.event.addListener(
            exports.markers[i],
            "click",
            showInfoWindow
          );
          setTimeout(dropMarker(i), i * 100);
          addResult(results[i], i);
        }
      }
    });
  }

  function clearMarkers() {
    for (var i = 0; i < exports.markers.length; i++) {
      if (exports.markers[i]) {
        exports.markers[i].setMap(null);
      }
    }

    exports.markers = [];
  } // Set the country restriction based on user input.
  // Also center and zoom the map on the given country.

  function setAutocompleteCountry() {
    var country = document.getElementById("country").value;

    if (country == "all") {
      exports.autocomplete.setComponentRestrictions({
        country: []
      });
      exports.map.setCenter({
        lat: 15,
        lng: 0
      });
      exports.map.setZoom(2);
    } else {
      exports.autocomplete.setComponentRestrictions({
        country: country
      });
      exports.map.setCenter(countries[country].center);
      exports.map.setZoom(countries[country].zoom);
    }

    clearResults();
    clearMarkers();
  }

  function dropMarker(i) {
    return function() {
      exports.markers[i].setMap(exports.map);
    };
  }

  function addResult(result, i) {
    var results = document.getElementById("results");
    var markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + ".png";
    var tr = document.createElement("tr");
    tr.style.backgroundColor = i % 2 === 0 ? "#F0F0F0" : "#FFFFFF";

    tr.onclick = function() {
      google.maps.event.trigger(exports.markers[i], "click");
    };

    var iconTd = document.createElement("td");
    var nameTd = document.createElement("td");
    var icon = document.createElement("img");
    icon.src = markerIcon;
    icon.setAttribute("class", "placeIcon");
    icon.setAttribute("className", "placeIcon");
    var name = document.createTextNode(result.name);
    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
  }

  function clearResults() {
    var results = document.getElementById("results");

    while (results.childNodes[0]) {
      results.removeChild(results.childNodes[0]);
    }
  } // Get the place details for a hotel. Show the information in an info window,
  // anchored on the marker for the hotel that the user selected.

  function showInfoWindow() {
    var marker = this;
    places.getDetails(
      {
        placeId: marker.placeResult.place_id
      },
      function(place, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          return;
        }

        infoWindow.open(exports.map, marker);
        buildIWContent(place);
      }
    );
  } // Load the place information into the HTML elements used by the info window.

  function buildIWContent(place) {
    document.getElementById("iw-icon").innerHTML =
      '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
    document.getElementById("iw-url").innerHTML =
      '<b><a href="' + place.url + '">' + place.name + "</a></b>";
    document.getElementById("iw-address").textContent = place.vicinity;

    if (place.formatted_phone_number) {
      document.getElementById("iw-phone-row").style.display = "";
      document.getElementById("iw-phone").textContent =
        place.formatted_phone_number;
    } else {
      document.getElementById("iw-phone-row").style.display = "none";
    } // Assign a five-star rating to the hotel, using a black star ('&#10029;')
    // to indicate the rating the hotel has earned, and a white star ('&#10025;')
    // for the rating points not achieved.

    if (place.rating) {
      var ratingHtml = "";

      for (var i = 0; i < 5; i++) {
        if (place.rating < i + 0.5) {
          ratingHtml += "&#10025;";
        } else {
          ratingHtml += "&#10029;";
        }

        document.getElementById("iw-rating-row").style.display = "";
        document.getElementById("iw-rating").innerHTML = ratingHtml;
      }
    } else {
      document.getElementById("iw-rating-row").style.display = "none";
    } // The regexp isolates the first part of the URL (domain plus subdomain)
    // to give a short URL for displaying in the info window.

    if (place.website) {
      var fullUrl = place.website;
      var website = hostnameRegexp.exec(place.website);

      if (website === null) {
        website = "http://" + place.website + "/";
        fullUrl = website;
      }

      document.getElementById("iw-website-row").style.display = "";
      document.getElementById("iw-website").textContent = website;
    } else {
      document.getElementById("iw-website-row").style.display = "none";
    }
  }

  exports.MARKER_PATH = MARKER_PATH;
  exports.addResult = addResult;
  exports.buildIWContent = buildIWContent;
  exports.clearMarkers = clearMarkers;
  exports.clearResults = clearResults;
  exports.countries = countries;
  exports.countryRestrict = countryRestrict;
  exports.dropMarker = dropMarker;
  exports.hostnameRegexp = hostnameRegexp;
  exports.initMap = initMap;
  exports.onPlaceChanged = onPlaceChanged;
  exports.search = search;
  exports.setAutocompleteCountry = setAutocompleteCountry;
  exports.showInfoWindow = showInfoWindow;
})((this.window = this.window || {}));

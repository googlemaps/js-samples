(function(exports) {
  "use strict";

  // In the following example, markers appear when the user clicks on the map.
  // Each marker is labeled with a single alphabetical character.
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  exports.labelIndex = 0;

  function initMap() {
    var bangalore = {
      lat: 12.97,
      lng: 77.59
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: bangalore
    }); // This event listener calls addMarker() when the map is clicked.

    google.maps.event.addListener(map, "click", function(event) {
      addMarker(event.latLng, map);
    }); // Add a marker at the center of the map.

    addMarker(bangalore, map);
  } // Adds a marker to the map.

  function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
      position: location,
      label: labels[exports.labelIndex++ % labels.length],
      map: map
    });
  }

  exports.addMarker = addMarker;
  exports.initMap = initMap;
  exports.labels = labels;
})((this.window = this.window || {}));

(function(exports) {
  "use strict";

  var events = [
    "bounds_changed",
    "center_changed",
    "click",
    "dblclick",
    "drag",
    "dragend",
    "dragstart",
    "heading_changed",
    "idle",
    "maptypeid_changed",
    "mousemove",
    "mouseout",
    "mouseover",
    "projection_changed",
    "resize",
    "rightclick",
    "tilesloaded",
    "tilt_changed",
    "zoom_changed"
  ];

  function setupListener(map, name) {
    var eventRow = document.getElementById(name);
    google.maps.event.addListener(map, name, function() {
      eventRow.className = "event active";
      var timeout = setTimeout(function() {
        eventRow.className = "event inactive";
      }, 1000);
    });
  }

  function initMap() {
    populateTable();
    var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(37.4419, -122.1419),
      zoom: 13,
      mapTypeId: "roadmap"
    });

    for (var i = 0; i < events.length; i++) {
      setupListener(map, events[i]);
    }
  } // Dynamically create the table of events from the defined hashmap

  function populateTable() {
    var eventsTable = document.getElementById("events");
    var content = "";

    for (var i = 0; i < events.length; i++) {
      content +=
        '<div class="event" id="' + events[i] + '">' + events[i] + "</div>";
    }

    eventsTable.innerHTML = content;
  }

  exports.events = events;
  exports.initMap = initMap;
  exports.populateTable = populateTable;
  exports.setupListener = setupListener;
})((this.window = this.window || {}));

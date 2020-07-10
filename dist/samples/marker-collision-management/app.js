(function(exports) {
  "use strict";

  // eslint-disable no-undef

  let markers; // Initialize and add the map

  function initMap() {
    let collisionBehavior = google.maps.CollisionBehavior.REQUIRED;
    exports.map = new google.maps.Map(document.getElementById("map"), {
      mapId: "3a3b33f0edd6ed2a",
      center: {
        lat: 47.609414458375674,
        lng: -122.33897030353548
      },
      zoom: 17
    }); // create markers with initial behavior

    markers = createMarkers(exports.map, collisionBehavior);
    const menuList = document.querySelector(".mdc-list"); // Add the behaviors to the select options

    for (let [key, value] of Object.entries(google.maps.CollisionBehavior)) {
      const item = document.createElement("LI");
      item.classList.add("mdc-list-item");
      item.setAttribute("data-value", key);
      const itemText = document.createElement("SPAN");
      itemText.classList.add("mdc-list-item__text");
      itemText.innerText = value;
      item.appendChild(itemText);
      menuList.appendChild(item);
    }

    exports.select = new mdc.select.MDCSelect(
      document.querySelector(".mdc-select")
    );
    exports.select.listen("MDCSelect:change", () => {
      collisionBehavior = exports.select.value;
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = createMarkers(exports.map, collisionBehavior);
    });
    exports.select.value = collisionBehavior;
  }

  function createMarkers(map, collisionBehavior) {
    // Create some markers on the map
    return [
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
    ].map(
      ([lng, lat]) =>
        new google.maps.Marker({
          position: new google.maps.LatLng({
            lat,
            lng
          }),
          map: map,
          collisionBehavior: collisionBehavior
        })
    );
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

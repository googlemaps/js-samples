/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// eslint-disable no-undef
let map;

// Initialize and add the map
function initMap() {
  let markers = [];
  let collisionBehavior = google.maps.CollisionBehavior.REQUIRED;

  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "6ff586e93e18149f",
    center: { lat: 47.609414458375674, lng: -122.33897030353548 },
    zoom: 17,
  });

  const menuList = document.querySelector(".mdc-list");

  // Add the behaviors to the select options
  for (const [key, value] of Object.entries(google.maps.CollisionBehavior)) {
    const item = document.createElement("LI");

    item.classList.add("mdc-list-item");
    item.setAttribute("data-value", key);

    const itemText = document.createElement("SPAN");

    itemText.classList.add("mdc-list-item__text");
    itemText.innerText = value;
    item.appendChild(itemText);
    menuList.appendChild(item);
  }

  // @ts-ignore
  const select = new mdc.select.MDCSelect(
    document.querySelector(".mdc-select")
  );

  select.listen("MDCSelect:change", () => {
    collisionBehavior = select.value;
    markers.forEach((marker) => {
      marker.collisionBehavior = collisionBehavior;
    });
  });
  select.value = collisionBehavior;

  // Create some markers on the map
  let locations = [
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
    [-122.3378, 47.6095],
  ];

  locations.forEach(([lng, lat]) => {
    const advancedMarker = new google.maps.marker.AdvancedMarkerView({
      position: new google.maps.LatLng({ lat, lng }),
      map,
      collisionBehavior: collisionBehavior,
    });

    markers.push(advancedMarker);
  });
}

window.initMap = initMap;

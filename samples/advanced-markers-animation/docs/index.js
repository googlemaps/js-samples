/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_advanced_markers_animation]
/**
 * Returns a random lat lng position within the map bounds.
 * @param {!google.maps.Map} map
 * @return {!google.maps.LatLngLiteral}
 */
function getRandomPosition(map) {
  const bounds = map.getBounds();
  const minLat = bounds.getSouthWest().lat();
  const minLng = bounds.getSouthWest().lng();
  const maxLat = bounds.getNorthEast().lat();
  const maxLng = bounds.getNorthEast().lng();
  const latRange = maxLat - minLat;
  // Note: longitude can span from a positive longitude in the west to a
  // negative one in the east. e.g. 150lng (150E) <-> -30lng (30W) is a large
  // span that covers the whole USA.
  let lngRange = maxLng - minLng;

  if (maxLng < minLng) {
    lngRange += 360;
  }
  return {
    lat: minLat + Math.random() * latRange,
    lng: minLng + Math.random() * lngRange,
  };
}

const total = 100;
const intersectionObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("drop");
      intersectionObserver.unobserve(entry.target);
    }
  }
});

function initMap() {
  const position = { lat: 37.4242011827985, lng: -122.09242296450893 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "4504f8b37365c3d0",
  });

  // Create 100 markers to animate.
  google.maps.event.addListenerOnce(map, "idle", () => {
    for (let i = 0; i < 100; i++) {
      createMarker(map);
    }
  });

  // Add a button to reset the example.
  const controlDiv = document.createElement("div");
  const controlUI = document.createElement("button");

  controlUI.classList.add("ui-button");
  controlUI.innerText = "Reset the example";
  controlUI.addEventListener("click", () => {
    // Reset the example by reloading the map iframe.
    refreshMap();
  });
  controlDiv.appendChild(controlUI);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlDiv);
}

function createMarker(map) {
  const advancedMarkerView = new google.maps.marker.AdvancedMarkerView({
    position: getRandomPosition(map),
    map: map,
  });
  const element = advancedMarkerView.content;

  element.style.opacity = 0;
  element.addEventListener("animationend", (event) => {
    element.classList.remove("drop");
    element.style.opacity = 1;
  });

  const time = 2 + Math.random(); // 2s delay for easy to see the animation

  element.style.setProperty("--delay-time", time + "s");
  intersectionObserver.observe(element);
}

function refreshMap() {
  // Refresh the map.
  const mapContainer = document.getElementById("mapContainer");
  const map = document.getElementById("map");

  map.remove();

  const mapDiv = document.createElement("div");

  mapDiv.id = "map";
  mapContainer.appendChild(mapDiv);
  initMap();
}

window.initMap = initMap;
// [END maps_advanced_markers_animation]

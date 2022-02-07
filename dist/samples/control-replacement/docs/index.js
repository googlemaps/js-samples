/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_control_replacement]
let map;

function initMap() {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    disableDefaultUI: true,
  });
  initZoomControl(map);
  initMapTypeControl(map);
  initFullscreenControl(map);
}

function initZoomControl(map) {
  document.querySelector(".zoom-control-in").onclick = function () {
    map.setZoom(map.getZoom() + 1);
  };

  document.querySelector(".zoom-control-out").onclick = function () {
    map.setZoom(map.getZoom() - 1);
  };

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
    document.querySelector(".zoom-control")
  );
}

function initMapTypeControl(map) {
  const mapTypeControlDiv = document.querySelector(".maptype-control");

  document.querySelector(".maptype-control-map").onclick = function () {
    mapTypeControlDiv.classList.add("maptype-control-is-map");
    mapTypeControlDiv.classList.remove("maptype-control-is-satellite");
    map.setMapTypeId("roadmap");
  };

  document.querySelector(".maptype-control-satellite").onclick = function () {
    mapTypeControlDiv.classList.remove("maptype-control-is-map");
    mapTypeControlDiv.classList.add("maptype-control-is-satellite");
    map.setMapTypeId("hybrid");
  };

  map.controls[google.maps.ControlPosition.LEFT_TOP].push(mapTypeControlDiv);
}

function initFullscreenControl(map) {
  const elementToSendFullscreen = map.getDiv().firstChild;
  const fullscreenControl = document.querySelector(".fullscreen-control");

  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(fullscreenControl);
  fullscreenControl.onclick = function () {
    if (isFullscreen(elementToSendFullscreen)) {
      exitFullscreen();
    } else {
      requestFullscreen(elementToSendFullscreen);
    }
  };

  document.onwebkitfullscreenchange =
    document.onmsfullscreenchange =
    document.onmozfullscreenchange =
    document.onfullscreenchange =
      function () {
        if (isFullscreen(elementToSendFullscreen)) {
          fullscreenControl.classList.add("is-fullscreen");
        } else {
          fullscreenControl.classList.remove("is-fullscreen");
        }
      };
}

function isFullscreen(element) {
  return (
    (document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement) == element
  );
}

function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullScreen) {
    element.msRequestFullScreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

window.initMap = initMap;
// [END maps_control_replacement]

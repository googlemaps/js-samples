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

// [START maps_control_replacement]
export var map;
export function initMap() {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    disableDefaultUI: true
  });

  initZoomControl(map);
  initMapTypeControl(map);
  initFullscreenControl(map);
}

export function initZoomControl(map) {
  document.querySelector(".zoom-control-in").onclick = function() {
    map.setZoom(map.getZoom() + 1);
  };
  document.querySelector(".zoom-control-out").onclick = function() {
    map.setZoom(map.getZoom() - 1);
  };
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
    document.querySelector(".zoom-control")
  );
}

export function initMapTypeControl(map) {
  var mapTypeControlDiv = document.querySelector(".maptype-control");
  document.querySelector(".maptype-control-map").onclick = function() {
    mapTypeControlDiv.classList.add("maptype-control-is-map");
    mapTypeControlDiv.classList.remove("maptype-control-is-satellite");
    map.setMapTypeId("roadmap");
  };
  document.querySelector(".maptype-control-satellite").onclick = function() {
    mapTypeControlDiv.classList.remove("maptype-control-is-map");
    mapTypeControlDiv.classList.add("maptype-control-is-satellite");
    map.setMapTypeId("hybrid");
  };

  map.controls[google.maps.ControlPosition.LEFT_TOP].push(mapTypeControlDiv);
}

export function initFullscreenControl(map) {
  var elementToSendFullscreen = map.getDiv().firstChild;
  var fullscreenControl = document.querySelector(".fullscreen-control");
  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(fullscreenControl);

  fullscreenControl.onclick = function() {
    if (isFullscreen(elementToSendFullscreen)) {
      exitFullscreen();
    } else {
      requestFullscreen(elementToSendFullscreen);
    }
  };

  document.onwebkitfullscreenchange = document.onmsfullscreenchange = document.onmozfullscreenchange = document.onfullscreenchange = function() {
    if (isFullscreen(elementToSendFullscreen)) {
      fullscreenControl.classList.add("is-fullscreen");
    } else {
      fullscreenControl.classList.remove("is-fullscreen");
    }
  };
}

export function isFullscreen(element) {
  return (
    (document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement) == element
  );
}
export function requestFullscreen(element) {
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
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msCancelFullScreen) {
    document.msCancelFullScreen();
  }
}
// [END maps_control_replacement]

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

/**
 * Creates a series of custom controls to demonstrate positioning
 * of controls within a map.
 */

/**
 * MakeControl adds a control to the map.
 * This constructor takes the controlDIV name and label text as arguments.
 * @constructor
 * @param {!Element} controlDiv  The name of the DIV element for the control.
 * @param {string} label  Text to display within the DIV element.
 */
export function MakeControl(controlDiv, label) {
  // Set up the control border.
  var controlUI = document.createElement("div");
  controlUI.title = label;
  controlUI.className = "controlUI";
  controlDiv.appendChild(controlUI);

  // Set up the inner control.
  var controlText = document.createElement("div");
  controlText.innerHTML = label;
  controlText.className = "controlText";
  controlUI.appendChild(controlText);
}

export function initialize() {
  var mapDiv = document.getElementById("map");
  var mapOptions = {
    zoom: 11,
    center: { lat: 47.46, lng: -122.52 },
    disableDefaultUI: true
  };
  var map = new google.maps.Map(mapDiv, mapOptions);

  var controlText = [
    ["TOP_LEFT", google.maps.ControlPosition.TOP_LEFT],
    ["LEFT_TOP", google.maps.ControlPosition.LEFT_TOP],
    ["TOP_CENTER", google.maps.ControlPosition.TOP_CENTER],
    ["TOP_RIGHT", google.maps.ControlPosition.TOP_RIGHT],
    ["RIGHT_TOP", google.maps.ControlPosition.RIGHT_TOP],
    ["LEFT_CENTER", google.maps.ControlPosition.LEFT_CENTER],
    ["RIGHT_CENTER", google.maps.ControlPosition.RIGHT_CENTER],
    ["BOTTOM_LEFT", google.maps.ControlPosition.BOTTOM_LEFT],
    ["LEFT_BOTTOM", google.maps.ControlPosition.LEFT_BOTTOM],
    ["BOTTOM_CENTER", google.maps.ControlPosition.BOTTOM_CENTER],
    ["BOTTOM_RIGHT", google.maps.ControlPosition.BOTTOM_RIGHT],
    ["RIGHT_BOTTOM", google.maps.ControlPosition.RIGHT_BOTTOM]
  ];

  for (var i = 0; i < controlText.length; i++) {
    var divLabel = controlText[i][0];
    var divName = document.createElement("div");
    var newDiv = new MakeControl(divName, divLabel);
    map.controls[controlText[i][1]].push(divName);
  }
}

google.maps.event.addDomListener(window, "load", initialize);

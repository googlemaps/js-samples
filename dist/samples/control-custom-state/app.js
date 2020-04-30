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

  var chicago = { lat: 41.85, lng: -87.65 };

  /**
   * The CenterControl adds a control to the map that recenters the map on
   * Chicago.
   * @constructor
   * @param {!Element} controlDiv
   * @param {!google.maps.Map} map
   * @param {?google.maps.LatLng} center
   */
  function CenterControl(controlDiv, map, center) {
    // We set up a variable for this since we're adding event listeners
    // later.
    var control = this;

    // Set the center property upon construction
    control.center_ = center;
    controlDiv.style.clear = "both";

    // Set CSS for the control border
    var goCenterUI = document.createElement("div");
    goCenterUI.id = "goCenterUI";
    goCenterUI.title = "Click to recenter the map";
    controlDiv.appendChild(goCenterUI);

    // Set CSS for the control interior
    var goCenterText = document.createElement("div");
    goCenterText.id = "goCenterText";
    goCenterText.innerHTML = "Center Map";
    goCenterUI.appendChild(goCenterText);

    // Set CSS for the setCenter control border
    var setCenterUI = document.createElement("div");
    setCenterUI.id = "setCenterUI";
    setCenterUI.title = "Click to change the center of the map";
    controlDiv.appendChild(setCenterUI);

    // Set CSS for the control interior
    var setCenterText = document.createElement("div");
    setCenterText.id = "setCenterText";
    setCenterText.innerHTML = "Set Center";
    setCenterUI.appendChild(setCenterText);

    // Set up the click event listener for 'Center Map': Set the center of
    // the map
    // to the current center of the control.
    goCenterUI.addEventListener("click", function() {
      var currentCenter = control.getCenter();
      map.setCenter(currentCenter);
    });

    // Set up the click event listener for 'Set Center': Set the center of
    // the control to the current center of the map.
    setCenterUI.addEventListener("click", function() {
      var newCenter = map.getCenter();
      control.setCenter(newCenter);
    });
  }

  /**
   * Define a property to hold the center state.
   * @private
   */
  CenterControl.prototype.center_ = null;

  /**
   * Gets the map center.
   * @return {?google.maps.LatLng}
   */
  CenterControl.prototype.getCenter = function() {
    return this.center_;
  };

  /**
   * Sets the map center.
   * @param {?google.maps.LatLng} center
   */
  CenterControl.prototype.setCenter = function(center) {
    this.center_ = center;
  };

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: chicago
    });

    // Create the DIV to hold the control and call the CenterControl()
    // constructor
    // passing in this DIV.
    var centerControlDiv = document.createElement("div");
    var centerControl = new CenterControl(
      centerControlDiv,
      exports.map,
      chicago
    );

    centerControlDiv.index = 1;
    centerControlDiv.style["padding-top"] = "10px";
    exports.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      centerControlDiv
    );
  }

  exports.CenterControl = CenterControl;
  exports.chicago = chicago;
  exports.initMap = initMap;
})((this.window = this.window || {}));

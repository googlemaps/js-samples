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

  var popup, Popup;
  /** Initializes the map and the custom popup. */

  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -33.9,
        lng: 151.1
      },
      zoom: 10
    });
    Popup = createPopupClass();
    popup = new Popup(
      new google.maps.LatLng(-33.866, 151.196),
      document.getElementById("content")
    );
    popup.setMap(exports.map);
  }
  /**
   * Returns the Popup class.
   *
   * Unfortunately, the Popup class can only be defined after
   * google.maps.OverlayView is defined, when the Maps API is loaded.
   * This function should be called by initMap.
   */

  function createPopupClass() {
    /**
     * A customized popup on the map.
     * @param {!google.maps.LatLng} position
     * @param {!Element} content The bubble div.
     * @constructor
     * @extends {google.maps.OverlayView}
     */
    function Popup(position, content) {
      this.position = position;
      content.classList.add("popup-bubble"); // This zero-height div is positioned at the bottom of the bubble.

      var bubbleAnchor = document.createElement("div");
      bubbleAnchor.classList.add("popup-bubble-anchor");
      bubbleAnchor.appendChild(content); // This zero-height div is positioned at the bottom of the tip.

      this.containerDiv = document.createElement("div");
      this.containerDiv.classList.add("popup-container");
      this.containerDiv.appendChild(bubbleAnchor); // Optionally stop clicks, etc., from bubbling up to the map.

      google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
    } // ES5 magic to extend google.maps.OverlayView.

    Popup.prototype = Object.create(google.maps.OverlayView.prototype);
    /** Called when the popup is added to the map. */

    Popup.prototype.onAdd = function() {
      this.getPanes().floatPane.appendChild(this.containerDiv);
    };
    /** Called when the popup is removed from the map. */

    Popup.prototype.onRemove = function() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
    };
    /** Called each frame when the popup needs to draw itself. */

    Popup.prototype.draw = function() {
      var divPosition = this.getProjection().fromLatLngToDivPixel(
        this.position
      ); // Hide the popup when it is far out of view.

      var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
          ? "block"
          : "none";

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    };

    return Popup;
  }

  exports.createPopupClass = createPopupClass;
  exports.initMap = initMap;
})((this.window = this.window || {}));

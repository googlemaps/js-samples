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
  function initialize() {
    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(0, -180),
      mapTypeId: "terrain"
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var flightPlanCoordinates = [
      new google.maps.LatLng(37.772323, -122.214897),
      new google.maps.LatLng(21.291982, -157.821856),
      new google.maps.LatLng(-18.142599, 178.431),
      new google.maps.LatLng(-27.46758, 153.027892)
    ];
    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      editable: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      map: map
    });
    var deleteMenu = new DeleteMenu();
    google.maps.event.addListener(flightPath, "rightclick", function(e) {
      // Check if click was on a vertex control point
      if (e.vertex == undefined) {
        return;
      }

      deleteMenu.open(map, flightPath.getPath(), e.vertex);
    });
    /**
     * A menu that lets a user delete a selected vertex of a path.
     * @constructor
     */

    function DeleteMenu() {
      this.div_ = document.createElement("div");
      this.div_.className = "delete-menu";
      this.div_.innerHTML = "Delete";
      var menu = this;
      google.maps.event.addDomListener(this.div_, "click", function() {
        menu.removeVertex();
      });
    }

    DeleteMenu.prototype = new google.maps.OverlayView();

    DeleteMenu.prototype.onAdd = function() {
      var deleteMenu = this;
      var map = this.getMap();
      this.getPanes().floatPane.appendChild(this.div_); // mousedown anywhere on the map except on the menu div will close the
      // menu.

      this.divListener_ = google.maps.event.addDomListener(
        map.getDiv(),
        "mousedown",
        function(e) {
          if (e.target != deleteMenu.div_) {
            deleteMenu.close();
          }
        },
        true
      );
    };

    DeleteMenu.prototype.onRemove = function() {
      google.maps.event.removeListener(this.divListener_);
      this.div_.parentNode.removeChild(this.div_); // clean up

      this.set("position");
      this.set("path");
      this.set("vertex");
    };

    DeleteMenu.prototype.close = function() {
      this.setMap(null);
    };

    DeleteMenu.prototype.draw = function() {
      var position = this.get("position");
      var projection = this.getProjection();

      if (!position || !projection) {
        return;
      }

      var point = projection.fromLatLngToDivPixel(position);
      this.div_.style.top = point.y + "px";
      this.div_.style.left = point.x + "px";
    };
    /**
     * Opens the menu at a vertex of a given path.
     */

    DeleteMenu.prototype.open = function(map, path, vertex) {
      this.set("position", path.getAt(vertex));
      this.set("path", path);
      this.set("vertex", vertex);
      this.setMap(map);
      this.draw();
    };
    /**
     * Deletes the vertex from the path.
     */

    DeleteMenu.prototype.removeVertex = function() {
      var path = this.get("path");
      var vertex = this.get("vertex");

      if (!path || vertex == undefined) {
        this.close();
        return;
      }

      path.removeAt(vertex);
      this.close();
    };
  }

  exports.initialize = initialize;
})((this.window = this.window || {}));

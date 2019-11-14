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

// [START script-body]
export function initMap() {
  var origin = { lat: -33.871, lng: 151.197 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: origin
  });
  var clickHandler = new ClickEventHandler(map, origin);
}

/**
 * @constructor
 */
export var ClickEventHandler = function(map, origin) {
  this.origin = origin;
  this.map = map;
  this.directionsService = new google.maps.DirectionsService();
  this.directionsRenderer = new google.maps.DirectionsRenderer();
  this.directionsRenderer.setMap(map);
  this.placesService = new google.maps.places.PlacesService(map);
  this.infowindow = new google.maps.InfoWindow();
  this.infowindowContent = document.getElementById("infowindow-content");
  this.infowindow.setContent(this.infowindowContent);

  // Listen for clicks on the map.
  this.map.addListener("click", this.handleClick.bind(this));
};

ClickEventHandler.prototype.handleClick = function(event) {
  console.log("You clicked on: " + event.latLng);
  // If the event has a placeId, use it.
  if (event.placeId) {
    console.log("You clicked on place:" + event.placeId);

    // Calling e.stop() on the event prevents the default info window from
    // showing.
    // If you call stop here when there is no placeId you will prevent some
    // other map click event handlers from receiving the event.
    event.stop();
    this.calculateAndDisplayRoute(event.placeId);
    this.getPlaceInformation(event.placeId);
  }
};

ClickEventHandler.prototype.calculateAndDisplayRoute = function(placeId) {
  var me = this;
  this.directionsService.route(
    {
      origin: this.origin,
      destination: { placeId: placeId },
      travelMode: "WALKING"
    },
    function(response, status) {
      if (status === "OK") {
        me.directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
};

ClickEventHandler.prototype.getPlaceInformation = function(placeId) {
  var me = this;
  this.placesService.getDetails({ placeId: placeId }, function(place, status) {
    if (status === "OK") {
      me.infowindow.close();
      me.infowindow.setPosition(place.geometry.location);
      me.infowindowContent.children["place-icon"].src = place.icon;
      me.infowindowContent.children["place-name"].textContent = place.name;
      me.infowindowContent.children["place-id"].textContent = place.place_id;
      me.infowindowContent.children["place-address"].textContent =
        place.formatted_address;
      me.infowindow.open(me.map);
    }
  });
};
// [END script-body]

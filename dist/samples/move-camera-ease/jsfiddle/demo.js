/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Easing, Tween, update } from "https://cdn.skypack.dev/@tweenjs/tween.js@^18.6.4";
let map;
const cameraOptions = {
  tilt: 0,
  heading: 0,
  zoom: 3,
  center: { lat: 35.6594945, lng: 139.6999859 },
};
const mapOptions = {
  ...cameraOptions,
  mapId: "15431d2b469f209e",
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // install Tweenjs with npm i @tweenjs/tween.js
  new Tween(cameraOptions) // Create a new tween that modifies 'cameraOptions'.
    .to({ tilt: 65, heading: 90, zoom: 18 }, 15000) // Move to destination in 15 second.
    .easing(Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
    .onUpdate(() => {
      map.moveCamera(cameraOptions);
    })
    .start(); // Start the tween immediately.

  // Setup the animation loop.
  function animate(time) {
    requestAnimationFrame(animate);
    update(time);
  }

  requestAnimationFrame(animate);
}

window.initMap = initMap;

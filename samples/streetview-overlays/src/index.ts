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

// [START maps_streetview_overlays]
let panorama: google.maps.StreetViewPanorama;

function initMap(): void {
  const astorPlace = { lat: 40.729884, lng: -73.990988 };

  // Set up the map
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: astorPlace,
      zoom: 18,
      streetViewControl: false
    }
  );

  // Set up the markers on the map
  const cafeMarker = new google.maps.Marker({
    position: { lat: 40.730031, lng: -73.991428 },
    map,
    icon:
      "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00",
    title: "Cafe"
  });

  const bankMarker = new google.maps.Marker({
    position: { lat: 40.729681, lng: -73.991138 },
    map,
    icon:
      "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=dollar|FFFF00",
    title: "Bank"
  });

  const busMarker = new google.maps.Marker({
    position: { lat: 40.729559, lng: -73.990741 },
    map,
    icon:
      "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=bus|FFFF00",
    title: "Bus Stop"
  });

  // We get the map's default panorama and set up some defaults.
  // Note that we don't yet set it visible.
  panorama = map.getStreetView();
  panorama.setPosition(astorPlace);
  panorama.setPov(
    /** @type {google.maps.StreetViewPov} */ {
      heading: 265,
      pitch: 0
    }
  );
}

function toggleStreetView() {
  const toggle = panorama.getVisible();

  if (toggle == false) {
    panorama.setVisible(true);
  } else {
    panorama.setVisible(false);
  }
}
// [END maps_streetview_overlays]
export {};

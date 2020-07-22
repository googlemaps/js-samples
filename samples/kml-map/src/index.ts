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
 * @fileoverview Sample showing capturing a KML file click
 *   and displaying the contents in a side panel instead of
 *   an InfoWindow
 */
// [START maps_kml_map]
let map: google.maps.Map;

const url =
  "https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml";

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: new google.maps.LatLng(-19.257753, 146.823688),
    zoom: 2,
    mapTypeId: "terrain"
  });

  const kmlLayer = new google.maps.KmlLayer({
    suppressInfoWindows: true,
    preserveViewport: false,
    map,
    url
  });
  kmlLayer.addListener("click", event => {
    const content = event.featureData.infoWindowHtml;
    const testimonial = document.getElementById("capture") as HTMLElement;
    testimonial.innerHTML = content;
  });
}
// [END maps_kml_map]
export {};

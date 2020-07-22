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

// [START maps_layer_kml_features]
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 12,
      center: { lat: 37.06, lng: -95.68 }
    }
  );

  const kmlLayer = new google.maps.KmlLayer({
    url: "http://googlemaps.github.io/kml-samples/kml/Placemark/placemark.kml",
    suppressInfoWindows: true,
    map: map
  });

  kmlLayer.addListener("click", kmlEvent => {
    const text = kmlEvent.featureData.description;
    showInContentWindow(text);
  });

  function showInContentWindow(text: string) {
    const sidediv = document.getElementById("content-window") as HTMLElement;
    sidediv.innerHTML = text;
  }
}
// [END maps_layer_kml_features]
export {};

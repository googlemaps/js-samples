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

// @ts-nocheck TODO(jpoehnelt) remove when fixed

// [START maps_geocoding_simple]
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 8,
      center: { lat: -34.397, lng: 150.644 },
    }
  );
  const geocoder = new google.maps.Geocoder();

  (document.getElementById("submit") as HTMLButtonElement).addEventListener(
    "click",
    () => {
      geocodeAddress(geocoder, map);
    }
  );
}

function geocodeAddress(
  geocoder: google.maps.Geocoder,
  resultsMap: google.maps.Map
) {
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;

  geocoder
    .geocode({ address: address })
    .then(({ results }) => {
      resultsMap.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      });
    })
    .catch((e) =>
      alert("Geocode was not successful for the following reason: " + e)
    );
}
// [END maps_geocoding_simple]
export { initMap };

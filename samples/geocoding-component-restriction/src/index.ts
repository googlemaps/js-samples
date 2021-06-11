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

// [START maps_geocoding_component_restriction]
function initMap(): void {
  const geocoder = new google.maps.Geocoder();
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 8,
      center: { lat: -33.865, lng: 151.209 },
    }
  );

  (document.getElementById("submit") as HTMLElement).addEventListener(
    "click",
    () => {
      geocodeAddress(geocoder, map);
    }
  );
}

function geocodeAddress(geocoder: google.maps.Geocoder, map: google.maps.Map) {
  geocoder.geocode(
    {
      address: "483 George St.",
      componentRestrictions: {
        country: "AU",
        postalCode: "2000",
      },
    },
    (
      results: google.maps.GeocoderResult[],
      status: google.maps.GeocoderStatus
    ) => {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
      } else {
        window.alert(
          "Geocode was not successful for the following reason: " + status
        );
      }
    }
  );
}
// [END maps_geocoding_component_restriction]
export { initMap };

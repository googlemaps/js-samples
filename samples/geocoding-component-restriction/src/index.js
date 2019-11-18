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

// [START maps_geocoding_component_restriction_script_body]
export function initMap() {
  var geocoder = new google.maps.Geocoder();
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: -33.865, lng: 151.209 }
  });

  document.getElementById("submit").addEventListener("click", function() {
    geocodeAddress(geocoder, map);
  });
}

export function geocodeAddress(geocoder, map) {
  geocoder.geocode(
    {
      componentRestrictions: {
        country: "AU",
        postalCode: "2000"
      }
    },
    function(results, status) {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        window.alert(
          "Geocode was not successful for the following reason: " + status
        );
      }
    }
  );
}
// [END maps_geocoding_component_restriction_script_body]

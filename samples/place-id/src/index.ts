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
// [START maps_place_id]
let map: google.maps.Map;

function initMap(): void {
  // Create a map centered in Pyrmont, Sydney (Australia).
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -33.8666, lng: 151.1958 },
    zoom: 15,
  });

  // Search for Google's office in Australia.
  const request = {
    location: map.getCenter(),
    radius: 500,
    query: "Google Sydney",
  };

  const service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(
  results: google.maps.places.PlaceResult[],
  status: google.maps.places.PlacesServiceStatus
) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    new google.maps.Marker({
      map,
      place: {
        placeId: results[0].place_id,
        location: (results[0].geometry as google.maps.places.PlaceGeometry)
          .location,
      },
    });
  }
}
// [END maps_place_id]
export { initMap };

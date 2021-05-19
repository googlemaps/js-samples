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
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: -25.363882, lng: 131.044922 },
    }
  );

  const bounds: google.maps.LatLngBoundsLiteral = {
    north: -25.363882,
    south: -31.203405,
    east: 131.044922,
    west: 125.244141,
  };

  // Display the area between the location southWest and northEast.
  map.fitBounds(bounds);

  // Add 5 markers to map at random locations.
  // For each of these markers, give them a title with their index, and when
  // they are clicked they should open an infowindow with text from a secret
  // message.
  const secretMessages = ["This", "is", "the", "secret", "message"];
  const lngSpan = bounds.east - bounds.west;
  const latSpan = bounds.north - bounds.south;

  for (let i = 0; i < secretMessages.length; ++i) {
    const marker = new google.maps.Marker({
      position: {
        lat: bounds.south + latSpan * Math.random(),
        lng: bounds.west + lngSpan * Math.random(),
      },
      map: map,
    });
    attachSecretMessage(marker, secretMessages[i]);
  }
}

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachSecretMessage(
  marker: google.maps.Marker,
  secretMessage: string
) {
  const infowindow = new google.maps.InfoWindow({
    content: secretMessage,
  });

  marker.addListener("click", () => {
    infowindow.open(marker.get("map"), marker);
  });
}
export { initMap };

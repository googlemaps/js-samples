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

// [START maps_directions_draggable]
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: -24.345, lng: 134.46 }, // Australia.
    }
  );

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    draggable: true,
    map,
    panel: document.getElementById("right-panel") as HTMLElement,
  });

  directionsRenderer.addListener("directions_changed", () => {
    computeTotalDistance(directionsRenderer.getDirections()!);
  });

  displayRoute(
    "Perth, WA",
    "Sydney, NSW",
    directionsService,
    directionsRenderer
  );
}

function displayRoute(
  origin: string,
  destination: string,
  service: google.maps.DirectionsService,
  display: google.maps.DirectionsRenderer
) {
  service.route(
    {
      origin: origin,
      destination: destination,
      waypoints: [
        { location: "Adelaide, SA" },
        { location: "Broken Hill, NSW" },
      ],
      travelMode: google.maps.TravelMode.DRIVING,
      avoidTolls: true,
    },
    (
      result: google.maps.DirectionsResult | null,
      status: google.maps.DirectionsStatus
    ) => {
      if (status === "OK" && result) {
        display.setDirections(result);
      } else {
        alert("Could not display directions due to: " + status);
      }
    }
  );
}

function computeTotalDistance(result: google.maps.DirectionsResult) {
  let total = 0;
  const myroute = result.routes[0];

  if (!myroute) {
    return;
  }

  for (let i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i]!.distance!.value;
  }
  total = total / 1000;
  (document.getElementById("total") as HTMLElement).innerHTML = total + " km";
}
// [END maps_directions_draggable]
export { initMap };

/*
 * Copyright 2021 Google LLC. All Rights Reserved.
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

/* eslint-disable no-undef */
// [START maps_deckgl_arclayer]
const AIRPORTS =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 50, lng: 14 },
      tilt: 30,
      mapId: "90f87356969d889c",
      zoom: 3,
    }
  );
  // @ts-ignore
  const flightsLayer = new deck.ArcLayer({
    id: "flights",
    data: AIRPORTS,
    dataTransform: (d) => d.features.filter((f) => f.properties.scalerank < 4),
    getSourcePosition: (f) => [14.42076, 50.08804], // Prague
    getTargetPosition: (f) => f.geometry.coordinates,
    getSourceColor: [0, 128, 200],
    getTargetColor: [0, 0, 80],
    getWidth: 1,
  });
  // @ts-ignore
  const overlay = new deck.GoogleMapsOverlay({
    layers: [flightsLayer],
  });

  overlay.setMap(map);
}
// [END maps_deckgl_arclayer]
export { initMap };

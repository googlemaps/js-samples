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
// [START maps_deckgl_tripslayer]
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json";

const LOOP_LENGTH = 1800;
const VENDOR_COLORS = [
  [255, 0, 0], // vendor #0
  [0, 0, 255], // vendor #1
];

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 40.72, lng: -74 },
      mapId: "fae05836df2dc8bb",
      tilt: 45,
      zoom: 15,
    }
  );

  let currentTime = 0;
  const props = {
    id: "trips",
    data: DATA_URL,
    getPath: (d) => d.path,
    getTimestamps: (d) => d.timestamps,
    getColor: (d) => VENDOR_COLORS[d.vendor],
    opacity: 1,
    widthMinPixels: 2,
    trailLength: 180,
    currentTime,
    shadowEnabled: false,
  };

  // @ts-ignore
  const overlay = new deck.GoogleMapsOverlay({});

  const animate = () => {
    currentTime = (currentTime + 1) % LOOP_LENGTH;

    // @ts-ignore
    const tripsLayer = new deck.TripsLayer({
      ...props,
      currentTime,
    });

    overlay.setProps({
      layers: [tripsLayer],
    });

    window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);

  overlay.setMap(map);
}
// [END maps_deckgl_tripslayer]
export { initMap };

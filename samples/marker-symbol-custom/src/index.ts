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

// [START maps_marker_symbol_custom]
// This example uses SVG path notation to add a vector-based symbol
// as the icon for a marker. The resulting icon is a pushpin-shaped
// symbol with a blue fill and border.

function initMap(): void {
  const center = new google.maps.LatLng(-33.712451, 150.311823);
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 9,
      center: center,
    }
  );

  const svgMarker = {
    path:
      "M20.5 15h-9c-1.104 0-2 0.896-2 2s0.896 2 2 2h9c1.104 0 2-0.896 2-2s-0.896-2-2-2zM13.583 8l-1.083 6h7l-1.084-6h-4.833zM16 29l1.5-9h-3l1.5 9zM13 7h6c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5h-6c-0.829 0-1.5 0.672-1.5 1.5s0.671 1.5 1.5 1.5z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeColor: "blue",
    strokeWeight: 1,
    rotation: 340,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
  });
}
// [END maps_marker_symbol_custom]
export { initMap };

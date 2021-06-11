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

// [START maps_marker_modern]
import { faBus } from "@fortawesome/free-solid-svg-icons";

function initMap(): void {
  const center = { lat: 36.6163, lng: -100.605 };

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 15,
      center,
    }
  );

  // use a FontAwesome svg
  new google.maps.Marker({
    position: { lat: 36.6163, lng: -100.61 },
    map,
    icon: {
      path: faBus.icon[4] as string,
      fillColor: "#0000ff",
      fillOpacity: 1,
      anchor: new google.maps.Point(
        faBus.icon[0] / 2, // width
        faBus.icon[1] // height
      ),
      strokeWeight: 1,
      strokeColor: "#ffffff",
      scale: 0.075,
    },
    title: "FontAwesome SVG Marker",
  });

  // use a Material Icon as font
  new google.maps.Marker({
    position: { lat: 36.6163, lng: -100.6 },
    map,
    label: {
      text: "\ue530", // codepoint from https://fonts.google.com/icons
      fontFamily: "Material Icons",
      color: "#ffffff",
      fontSize: "18px",
    },
    title: "Material Icon Font Marker",
  });
}
// [END maps_marker_modern]
export { initMap };

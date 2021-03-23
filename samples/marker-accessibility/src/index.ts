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

// [START maps_marker_accessibility]

// The following example creates five accessible and
// focusable markers.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 12,
      center: { lat: 34.84555, lng: -111.8035 },
    }
  );

  // LatLng data for the markers.
  const tourStops: [number, number][] = [
    [34.8791806, -111.8265049], // Boynton Pass
    [34.8559195, -111.7988186], // Airport Mesa
    [34.832149, -111.7695277], // Chapel of the Holy Cross
    [34.823736, -111.8001857], // Red Rock Crossing
    [34.800326, -111.7665047], // Bell Rock
  ];

  // Set title text for the markers.
  const titleText: string[] = [
    "The first marker (Boynton Pass) receives the initial focus when tab " +
      "is pressed. Use arrow keys to move between markers; press tab again to " +
      "cycle through the map controls.",
    "Second marker: Airport Mesa",
    "Third marker: Chapel of the Holy Cross",
    "Fourth marker: Red Rock Crossing",
    "Marker five: Bell Rock, the final stop on our tour!",
  ];

  // Create an info window to share between markers.
  const infowindow = new google.maps.InfoWindow();

  // Create the markers.
  titleText.forEach((title, i) => {
    const marker = new google.maps.Marker({
      position: {
        lat: tourStops[i][0], lng: tourStops[i][1],
      },
      map,
      title,
      label: `${i + 1}`,
    });
    
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infowindow.close();
      infowindow.setContent(marker.getTitle());
      infowindow.open(marker.getMap(), marker);
    });
  });
}

// [END maps_marker_accessibility]
export { initMap };

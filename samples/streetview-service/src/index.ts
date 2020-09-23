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

// [START maps_streetview_service]
/*
 * Click the map to set a new location for the Street View camera.
 */

let map: google.maps.Map;

let panorama: google.maps.StreetViewPanorama;

function initMap(): void {
  const berkeley = { lat: 37.869085, lng: -122.254775 };
  const sv = new google.maps.StreetViewService();

  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano") as HTMLElement
  );

  // Set up the map.
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: berkeley,
    zoom: 16,
    streetViewControl: false,
  });

  // Set the initial Street View camera to the center of the map
  sv.getPanorama({ location: berkeley, radius: 50 }, processSVData);

  // Look for a nearby Street View panorama when the map is clicked.
  // getPanorama will return the nearest pano when the given
  // radius is 50 meters or less.
  map.addListener("click", (event) => {
    sv.getPanorama({ location: event.latLng, radius: 50 }, processSVData);
  });
}

function processSVData(
  data: google.maps.StreetViewPanoramaData | null,
  status: google.maps.StreetViewStatus
) {
  if (status === "OK") {
    const location = (data as google.maps.StreetViewPanoramaData)
      .location as google.maps.StreetViewLocation;
    const marker = new google.maps.Marker({
      position: location.latLng,
      map,
      title: location.description,
    });

    panorama.setPano(location.pano as string);
    panorama.setPov({
      heading: 270,
      pitch: 0,
    });
    panorama.setVisible(true);

    marker.addListener("click", () => {
      const markerPanoID = location.pano;
      // Set the Pano to use the passed panoID.
      panorama.setPano(markerPanoID as string);
      panorama.setPov({
        heading: 270,
        pitch: 0,
      });
      panorama.setVisible(true);
    });
  } else {
    console.error("Street View data not found for this location.");
  }
}
// [END maps_streetview_service]
export { initMap };

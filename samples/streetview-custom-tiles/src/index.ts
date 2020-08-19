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

// [START maps_streetview_custom_tiles]
let panorama: google.maps.StreetViewPanorama;

// StreetViewPanoramaData of a panorama just outside the Google Sydney office.
let outsideGoogle: google.maps.StreetViewPanoramaData;

// StreetViewPanoramaData for a custom panorama: the Google Sydney reception.
function getReceptionPanoramaData(): google.maps.StreetViewPanoramaData {
  return {
    location: {
      pano: "reception", // The ID for this custom panorama.
      description: "Google Sydney - Reception",
      latLng: new google.maps.LatLng(-33.86684, 151.19583)
    },
    links: [
      {
        heading: 195,
        description: "Exit",
        pano: (outsideGoogle.location as google.maps.StreetViewLocation).pano
      }
    ],
    copyright: "Imagery (c) 2010 Google",
    tiles: {
      tileSize: new google.maps.Size(1024, 512),
      worldSize: new google.maps.Size(2048, 1024),
      centerHeading: 105,
      getTileUrl: function(
        pano: string,
        zoom: number,
        tileX: number,
        tileY: number
      ): string {
        return (
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/" +
          "panoReception1024-" +
          zoom +
          "-" +
          tileX +
          "-" +
          tileY +
          ".jpg"
        );
      }
    }
  };
}

function initPanorama() {
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view") as HTMLElement,
    { pano: (outsideGoogle.location as google.maps.StreetViewLocation).pano }
  );
  // Register a provider for the custom panorama.
  panorama.registerPanoProvider(
    (pano: string): google.maps.StreetViewPanoramaData => {
      if (pano === "reception") {
        return getReceptionPanoramaData();
      }
      // @ts-ignore TODO(jpoehnelt) fix typings
      return null;
    }
  );

  // Add a link to our custom panorama from outside the Google Sydney office.
  panorama.addListener("links_changed", () => {
    if (
      panorama.getPano() ===
      (outsideGoogle.location as google.maps.StreetViewLocation).pano
    ) {
      panorama.getLinks().push({
        description: "Google Sydney",
        heading: 25,
        pano: "reception"
      });
    }
  });
}

function initMap(): void {
  // Use the Street View service to find a pano ID on Pirrama Rd, outside the
  // Google office.
  const streetviewService = new google.maps.StreetViewService();
  streetviewService.getPanorama(
    { location: { lat: -33.867386, lng: 151.195767 } },
    (
      result: google.maps.StreetViewPanoramaData | null,
      status: google.maps.StreetViewStatus
    ) => {
      if (status === google.maps.StreetViewStatus.OK && result) {
        outsideGoogle = result;
        initPanorama();
      }
    }
  );
}
// [END maps_streetview_custom_tiles]
export { initMap };

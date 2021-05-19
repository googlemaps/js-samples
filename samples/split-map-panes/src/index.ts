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
let mapLeft: google.maps.Map, mapRight: google.maps.Map;

// [START maps_split_map_panes]
function initMap(): void {
  const mapOptions = {
    center: { lat: 44.5250489, lng: -110.83819 },
    zoom: 18,
    scaleControl: false,
    streetViewControl: false,
  };

  // instantiate the map on the left with control positioning
  mapLeft = new google.maps.Map(
    document.getElementById("map-left") as HTMLElement,
    {
      ...mapOptions,
      mapTypeId: "satellite",
      tilt: 0, // at high zoom levels we need to maintain the same projection
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM,
      },
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP,
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM,
      },
    }
  );

  // instantiate the map on the right with control positioning
  mapRight = new google.maps.Map(
    document.getElementById("map-right") as HTMLElement,
    {
      ...mapOptions,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    }
  );

  // helper function to keep maps in sync
  function sync(...maps: google.maps.Map[]) {
    let center: google.maps.LatLng, zoom: number;

    function update(changedMap) {
      maps.forEach((m) => {
        if (m === changedMap) {
          return;
        }
        m.setCenter(center);
        m.setZoom(zoom);
      });
    }

    maps.forEach((m) => {
      m.addListener("bounds_changed", () => {
        const changedCenter = m.getCenter()!;
        const changedZoom = m.getZoom()!;

        if (changedCenter !== center || changedZoom !== zoom) {
          center = changedCenter;
          zoom = changedZoom;
          update(m);
        }
      });
    });
  }

  sync(mapLeft, mapRight);

  function handleContainerResize() {
    const width = (document.getElementById("container") as HTMLElement)
      .offsetWidth;
    (
      document.getElementById("map-left") as HTMLElement
    ).style.width = `${width}px`;
    (
      document.getElementById("map-right") as HTMLElement
    ).style.width = `${width}px`;
  }

  // trigger to set map container size since using absolute
  handleContainerResize();
  // add event listener
  window.addEventListener("resize", handleContainerResize);

  //@ts-ignore
  Split(["#left", "#right"], {
    sizes: [50, 50],
  });
}
// [END maps_split_map_panes]
export { initMap };

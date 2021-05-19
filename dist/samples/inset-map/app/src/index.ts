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
let map, overview;

const OVERVIEW_DIFFERENCE = 5;
const OVERVIEW_MIN_ZOOM = 3;
const OVERVIEW_MAX_ZOOM = 10;

function initMap(): void {
  const mapOptions = {
    center: { lat: 50, lng: 8 },
    zoom: 7,
  };

  // instantiate the primary map
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    ...mapOptions,
  });

  // instantiate the overview map without controls
  overview = new google.maps.Map(
    document.getElementById("overview") as HTMLElement,
    {
      ...mapOptions,
      disableDefaultUI: true,
      gestureHandling: "none",
      zoomControl: false,
    }
  );

  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  map.addListener("bounds_changed", () => {
    overview.setCenter(map.getCenter()!);
    overview.setZoom(
      clamp(
        map.getZoom()! - OVERVIEW_DIFFERENCE,
        OVERVIEW_MIN_ZOOM,
        OVERVIEW_MAX_ZOOM
      )
    );
  });
}
export { initMap };

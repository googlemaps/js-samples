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

// Initialize and add the side by side maps
function initMap(): void {
  const sharedOptions = {
    center: { lat: 47.609414458375674, lng: -122.33897030353548 },
    zoom: 17,
    disableDefaultUI: true,
    gestureHandling: "none",
  };

  new google.maps.Map(
    document.getElementById("left") as HTMLElement,
    {
      ...sharedOptions,
      mapId: "ed1309c122a3dfcb",
      useStaticMap: false,
    } as google.maps.MapOptions
  );

  new google.maps.Map(
    document.getElementById("right") as HTMLElement,
    {
      ...sharedOptions,
      mapId: "ed1309c122a3dfcb",
      useStaticMap: true,
    } as google.maps.MapOptions // TODO add mapId to @types/googlemaps when out of beta
  );
}
export { initMap };

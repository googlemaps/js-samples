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

// [START maps_maptype_image]
function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 0, lng: 0 },
      zoom: 1,
      streetViewControl: false,
      mapTypeControlOptions: {
        mapTypeIds: ["moon"],
      },
    }
  );

  const moonMapType = new google.maps.ImageMapType({
    getTileUrl: function (coord, zoom): string {
      const normalizedCoord = getNormalizedCoord(coord, zoom);

      if (!normalizedCoord) {
        return "";
      }
      const bound = Math.pow(2, zoom);
      return (
        "https://mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw" +
        "/" +
        zoom +
        "/" +
        normalizedCoord.x +
        "/" +
        (bound - normalizedCoord.y - 1) +
        ".jpg"
      );
    },
    tileSize: new google.maps.Size(256, 256),
    maxZoom: 9,
    minZoom: 0,
    // @ts-ignore TODO(jpoehnelt) 'radius' does not exist in type 'ImageMapTypeOptions'
    radius: 1738000,
    name: "Moon",
  });

  map.mapTypes.set("moon", moonMapType);
  map.setMapTypeId("moon");
}

// Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
function getNormalizedCoord(coord, zoom) {
  const y = coord.y;
  let x = coord.x;

  // tile range in one direction range is dependent on zoom level
  // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
  const tileRange = 1 << zoom;

  // don't repeat across y-axis (vertically)
  if (y < 0 || y >= tileRange) {
    return null;
  }

  // repeat across x-axis
  if (x < 0 || x >= tileRange) {
    x = ((x % tileRange) + tileRange) % tileRange;
  }

  return { x: x, y: y };
}
// [END maps_maptype_image]
export { initMap };

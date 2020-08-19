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

// [START maps_maptype_base]
/*
 * This demo demonstrates how to replace default map tiles with custom imagery.
 * In this case, the CoordMapType displays gray tiles annotated with the tile
 * coordinates.
 *
 * Try panning and zooming the map to see how the coordinates change.
 */

class CoordMapType {
  tileSize: google.maps.Size;
  maxZoom = 19;
  name = "Tile #s";
  alt = "Tile Coordinate Map Type";

  constructor(tileSize: google.maps.Size) {
    this.tileSize = tileSize;
  }

  getTile(
    coord: google.maps.Point,
    zoom: number,
    ownerDocument: Document
  ): HTMLElement {
    const div = ownerDocument.createElement("div");
    div.innerHTML = String(coord);
    div.style.width = this.tileSize.width + "px";
    div.style.height = this.tileSize.height + "px";
    div.style.fontSize = "10";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px";
    div.style.borderColor = "#AAAAAA";
    div.style.backgroundColor = "#E5E3DF";
    return div;
  }

  releaseTile(tile: HTMLElement): void {}
}

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 10,
      center: { lat: 41.85, lng: -87.65 },
      streetViewControl: false,
      mapTypeId: "coordinate",
      mapTypeControlOptions: {
        mapTypeIds: ["coordinate", "roadmap"],
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    }
  );

  map.addListener("maptypeid_changed", () => {
    const showStreetViewControl =
      (map.getMapTypeId() as string) !== "coordinate";
    map.setOptions({
      streetViewControl: showStreetViewControl
    });
  });

  // Now attach the coordinate map type to the map's registry.
  map.mapTypes.set(
    "coordinate",
    new CoordMapType(new google.maps.Size(256, 256))
  );
}
// [END maps_maptype_base]
export { initMap };

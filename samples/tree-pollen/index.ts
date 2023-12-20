/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_tree_pollen]
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
  
  class AirQualityMapType {
    tileSize;
    alt = null;
    maxZoom = 16;
    minZoom = 3;
    name = null;
    projection = null;
    radius = 6378137;
    constructor(tileSize) {
      this.tileSize = tileSize;
    }
  
    getTile(coord, zoom, ownerDocument) {
      const img = ownerDocument.createElement("img");
      const mapType = "TREE_UPI";
      const normalizedCoord = getNormalizedCoord(coord, zoom);
  
      const x = coord.x;
      const y = coord.y;
      const key = "YOUR_API_KEY";
      img.style.opacity = 0.8;
      img.src = `https://pollen.googleapis.com/v1/mapTypes/${mapType}/heatmapTiles/${zoom}/${x}/${y}?key=${key}`;
      return img;
    }
    releaseTile(tile) {}
  }
  
  async function initMap(): Promise<void> {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    const myLatLng = { lat: 40.3769, lng: -80.5417 };
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      mapId: "ffcdd6091fa9fb03",
      zoom: 0,
      center: myLatLng,
      maxZoom: 16,
      minZoom: 3,
      restriction: {
        latLngBounds: {north: 80, south: -80, west: -180, east: 180},
        strictBounds: true,
      },
      streetViewControl: false,
    });
    const aqMapType = new AirQualityMapType(new google.maps.Size(256, 256));
    map.overlayMapTypes.insertAt(0, aqMapType);
  
  }

initMap();
// [END maps_tree_pollen]
export {};

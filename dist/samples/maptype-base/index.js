// [START maps_maptype_base]
/*
 * This demo demonstrates how to replace default map tiles with custom imagery.
 * In this case, the CoordMapType displays gray tiles annotated with the tile
 * coordinates.
 *
 * Try panning and zooming the map to see how the coordinates change.
 */
class CoordMapType {
  constructor(tileSize) {
    this.maxZoom = 19;
    this.name = "Tile #s";
    this.alt = "Tile Coordinate Map Type";
    this.tileSize = tileSize;
  }
  getTile(coord, zoom, ownerDocument) {
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
  releaseTile(tile) {}
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 41.85, lng: -87.65 },
    streetViewControl: false,
    mapTypeId: "coordinate",
    mapTypeControlOptions: {
      mapTypeIds: ["coordinate", "roadmap"],
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    },
  });
  map.addListener("maptypeid_changed", () => {
    const showStreetViewControl = map.getMapTypeId() !== "coordinate";
    map.setOptions({
      streetViewControl: showStreetViewControl,
    });
  });
  // Now attach the coordinate map type to the map's registry.
  map.mapTypes.set(
    "coordinate",
    new CoordMapType(new google.maps.Size(256, 256))
  );
}
// [END maps_maptype_base]

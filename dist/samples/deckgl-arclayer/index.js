/* eslint-disable no-undef */
// [START maps_deckgl_arclayer]
const AIRPORTS =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50, lng: 14 },
    tilt: 30,
    mapId: "90f87356969d889c",
    zoom: 3,
  });
  const flightsLayer = new deck.ArcLayer({
    id: "flights",
    data: AIRPORTS,
    dataTransform: (d) => d.features.filter((f) => f.properties.scalerank < 4),
    getSourcePosition: (f) => [14.42076, 50.08804],
    getTargetPosition: (f) => f.geometry.coordinates,
    getSourceColor: [0, 128, 200],
    getTargetColor: [0, 0, 80],
    getWidth: 1,
  });
  const overlay = new deck.GoogleMapsOverlay({
    layers: [flightsLayer],
  });

  overlay.setMap(map);
}
// [END maps_deckgl_arclayer]

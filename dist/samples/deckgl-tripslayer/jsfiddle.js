/* eslint-disable no-undef */
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json";
const LOOP_LENGTH = 1800;
const THEME = {
  trailColor0: [255, 0, 0],
  trailColor1: [0, 0, 255],
};

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.72, lng: -74 },
    mapId: "fae05836df2dc8bb",
    tilt: 45,
    zoom: 15,
  });
  let currentTime = 0;
  const props = {
    id: "trips",
    data: DATA_URL,
    getPath: (d) => d.path,
    getTimestamps: (d) => d.timestamps,
    getColor: (d) => (d.vendor === 0 ? THEME.trailColor0 : THEME.trailColor1),
    opacity: 1,
    widthMinPixels: 2,
    trailLength: 180,
    currentTime,
    shadowEnabled: false,
  };
  const overlay = new deck.GoogleMapsOverlay({});

  const animate = () => {
    currentTime = (currentTime + 1) % LOOP_LENGTH;

    const tripsLayer = new deck.TripsLayer({
      ...props,
      currentTime,
    });

    overlay.setProps({
      layers: [tripsLayer],
    });
    window.requestAnimationFrame(animate);
  };

  window.requestAnimationFrame(animate);
  overlay.setMap(map);
}

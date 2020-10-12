// [START maps_programmatic_load]
let map;
const Loader = google.maps.plugins.loader.Loader;
const additionalOptions = {};
// [START maps_programmatic_load_promise]
const loader = new Loader({
  apiKey: "YOUR_API_KEY",
  version: "weekly",
  ...additionalOptions,
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
// [END maps_programmatic_load_promise]
// [END maps_programmatic_load]

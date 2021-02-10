// [START maps_js_local_context_basic]
let map;

function initMap() {
  // [START maps_js_local_context_basic_instantiation]
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });
  // [END maps_js_local_context_basic_instantiation]
  map = localContextMapView.map;
  // [START maps_js_local_context_basic_set_options]
  map.setOptions({
    center: { lat: 51.507307, lng: -0.08114 },
    zoom: 14,
  });
  // [END maps_js_local_context_basic_set_options]
}
// [END maps_js_local_context_basic]

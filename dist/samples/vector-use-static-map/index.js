// [START maps_vector_use_static_map]
// Initialize and add the side by side maps
function initMap() {
  const sharedOptions = {
    center: { lat: 47.609414458375674, lng: -122.33897030353548 },
    zoom: 17,
    disableDefaultUI: true,
    gestureHandling: "none",
  };
  new google.maps.Map(document.getElementById("left"), {
    ...sharedOptions,
    mapId: "ed1309c122a3dfcb",
    useStaticMap: false,
  });
  // [START maps_vector_use_static_map_js_instantiate]
  new google.maps.Map(
    document.getElementById("right"),
    {
      ...sharedOptions,
      mapId: "ed1309c122a3dfcb",
      useStaticMap: true,
    } // TODO add mapId to @types/googlemaps when out of beta
  );
  // [END maps_vector_use_static_map_js_instantiate]
}
// [END maps_vector_use_static_map]

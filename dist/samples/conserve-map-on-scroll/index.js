// [START maps_conserve_map_on_scroll]
// [START maps_conserve_map_script_snippet]
function initMap() {
  const locationRio = { lat: -22.915, lng: -43.197 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "cooperative",
  });
  // [END maps_conserve_map_script_snippet]
  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}
// [END maps_conserve_map_on_scroll]

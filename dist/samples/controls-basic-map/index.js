// [START maps_controls_basic_map]
// [START maps_controls_basic_map_script_snippet]
function initMap() {
  const locationRio = { lat: -22.915, lng: -43.197 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "greedy",
  });
  // [END maps_controls_basic_map_script_snippet]
  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}
// [END maps_controls_basic_map]

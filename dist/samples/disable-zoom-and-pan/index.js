// [START maps_disable_zoom_and_pan]
// [START maps_disable_zoom_and_pan_script_snippet]
function initMap() {
  const locationRio = { lat: -22.915, lng: -43.197 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "none",
    zoomControl: false,
  });
  // [END maps_disable_zoom_and_pan_script_snippet]
  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}
// [END maps_disable_zoom_and_pan]

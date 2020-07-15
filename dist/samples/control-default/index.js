// [START maps_control_default]
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}
// [END maps_control_default]
export { initMap };

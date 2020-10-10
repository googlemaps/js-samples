// [START maps_control_disableUI]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
    disableDefaultUI: true,
  });
}
// [END maps_control_disableUI]

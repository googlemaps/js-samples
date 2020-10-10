// [START maps_aerial_simple]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.964, lng: -122.015 },
    zoom: 18,
    mapTypeId: "satellite",
  });
  map.setTilt(45);
}
// [END maps_aerial_simple]

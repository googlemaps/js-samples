// [START maps_marker_simple]
function initMap() {
  const myLatLng = { lat: -25.363, lng: 131.044 };
  const myMap = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map: myMap,
    title: "Hello World!",
  });
}
// [END maps_marker_simple]

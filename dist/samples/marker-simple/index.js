// [START maps_marker_simple]
function initMap() {
  var myLatLng = { lat: -25.363, lng: 131.044 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!"
  });
}
// [END maps_marker_simple]
export { initMap };

// [START maps_layer_transit]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 51.501904, lng: -0.115871 },
  });
  const transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
}
// [END maps_layer_transit]

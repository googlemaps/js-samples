// [START maps_layer_bicycling]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 42.3726399, lng: -71.1096528 },
  });
  const bikeLayer = new google.maps.BicyclingLayer();

  bikeLayer.setMap(map);
}
// [END maps_layer_bicycling]

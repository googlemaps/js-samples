function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.964, lng: -122.015 },
    zoom: 18,
    mapTypeId: "satellite"
  });
  map.setTilt(45);
}
export { initMap };

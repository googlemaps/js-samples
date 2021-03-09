function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7638, lng: 73.9806 },
    zoom: 15,
    mapTypeId: "satellite",
  });
  map.setTilt(45);
}

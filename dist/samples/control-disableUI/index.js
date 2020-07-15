function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
    disableDefaultUI: true
  });
}
export { initMap };

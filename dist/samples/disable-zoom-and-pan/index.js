function initMap() {
  var locationRio = { lat: -22.915, lng: -43.197 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "none",
    zoomControl: false
  });
  var marker = new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!"
  });
}
export { initMap };

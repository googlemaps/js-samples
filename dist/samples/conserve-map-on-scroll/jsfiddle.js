function initMap() {
  const locationRio = { lat: -22.915, lng: -43.197 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: locationRio,
    gestureHandling: "cooperative",
  });

  new google.maps.Marker({
    position: locationRio,
    map,
    title: "Hello World!",
  });
}

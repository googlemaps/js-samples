let map;
const loader = new google.maps.plugins.loader.Loader({
  apiKey: "AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE",
  version: "weekly",
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

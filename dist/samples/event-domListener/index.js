// [START maps_event_domListener]
function initMap() {
  const mapDiv = document.getElementById("map");
  const map = new google.maps.Map(mapDiv, {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
  });
  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, "click", () => {
    window.alert("Map was clicked!");
  });
}
// [END maps_event_domListener]

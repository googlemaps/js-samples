// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=geometry">
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 34.366, lng: -89.519 },
  });
  const poly = new google.maps.Polyline({
    strokeColor: "#000000",
    strokeOpacity: 1,
    strokeWeight: 3,
    map: map,
  });
  // Add a listener for the click event
  google.maps.event.addListener(map, "click", (event) => {
    addLatLngToPoly(event.latLng, poly);
  });
}

/**
 * Handles click events on a map, and adds a new point to the Polyline.
 * Updates the encoding text area with the path's encoded values.
 */
function addLatLngToPoly(latLng, poly) {
  const path = poly.getPath();
  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear
  path.push(latLng);
  // Update the text field to display the polyline encodings
  const encodeString = google.maps.geometry.encoding.encodePath(path);

  if (encodeString) {
    document.getElementById("encoded-polyline").value = encodeString;
  }
}

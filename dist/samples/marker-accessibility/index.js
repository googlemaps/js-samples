// [START maps_marker_accessibility]
// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 34.84555, lng: -111.8035 },
  });
  // LatLng data for the markers.
  const tourStops = [
    [34.8791806, -111.8265049],
    [34.8559195, -111.7988186],
    [34.832149, -111.7695277],
    [34.823736, -111.8001857],
    [34.800326, -111.7665047],
  ];
  // Set title text for the markers.
  const titleText = [
    "The first marker (Boynton Pass) receives the initial focus when tab " +
      "is pressed. Use arrow keys to move between markers; press tab again to " +
      "cycle through the map controls.",
    "Second marker: Airport Mesa",
    "Third marker: Chapel of the Holy Cross",
    "Fourth marker: Red Rock Crossing",
    "Marker five: Bell Rock, the final stop on our tour!",
  ];
  // Create an info window to share between markers.
  const infowindow = new google.maps.InfoWindow();
  // Create the markers.
  titleText.forEach((title, i) => {
    const pos = tourStops[i];
    const marker = new google.maps.Marker({
      position: { lat: pos[0], lng: pos[1] },
      map,
      title,
      label: `${i + 1}`,
    });
    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infowindow.close();
      infowindow.setContent(marker.getTitle());
      infowindow.open(marker.getMap(), marker);
    });
  });
}
// [END maps_marker_accessibility]

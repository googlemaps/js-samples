// The following example creates five accessible and
// focusable markers.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 12,
      center: { lat: 34.84555, lng: -111.8035},
    }
  );

// LatLng data for the markers.
const tourStops = [
  [34.8791806, -111.8265049], // Boynton Pass
  [34.8559195, -111.7988186], // Airport Mesa
  [34.832149, -111.7695277], // Chapel of the Holy Cross
  [34.823736, -111.8001857], // Red Rock Crossing
  [34.800326, -111.7665047], // Bell Rock
];

  // Set title text for the markers.
  const titleText = [
    "The first marker (Boynton Pass) receives the initial focus when tab " +
      "is pressed. Use arrow keys to move between markers; press tab again to " +
      "cycle through the map controls.",
    "Second marker: Airport Mesa",
    "Third marker: Chapel of the Holy Cross",
    "Fourth marker: Red Rock Crossing",
    "Marker five: Bell Rock, the final stop on our tour!"
  ];

  for (let i = 0; i < titleText.length; ++i) {
    const pos = tourStops[i];
    const marker = new google.maps.Marker({
      position: { lat: pos[0], lng: pos[1],
      },
      map: map,
    });
    attachText(marker, titleText[i], (i + 1).toString());
  }
}

// Adds a click listener and title text to each marker.
function attachText(marker: google.maps.Marker, titleText: string, labelText: string) {
  const infowindow = new google.maps.InfoWindow({
    content: titleText,
  });
  // Set the marker title to provide accessible text.
  marker.setTitle(titleText);
  
  // Add a numeric label to the marker.
  marker.setLabel(labelText);
  
  // Set a click listener to make the marker accessible.
  marker.addListener("click", () => {
    infowindow.open(marker.get("map"), marker);
  });
}
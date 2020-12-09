let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });
  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 51.507307, lng: -0.08114 },
    zoom: 14,
  });
}

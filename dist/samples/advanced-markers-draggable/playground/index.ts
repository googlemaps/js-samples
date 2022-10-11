function initMap() {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 37.39094933041195, lng: -122.02503913145092 },
      zoom: 14,
      mapId: "4504f8b37365c3d0",
    }
  );

  const infoWindow = new google.maps.InfoWindow();

  const draggableMarker = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.39094933041195, lng: -122.02503913145092 },
    draggable: true,
    title: "This marker is draggable.",
  });
  draggableMarker.addListener("click", (event) => {
    const position = draggableMarker.position as google.maps.LatLngLiteral;
    infoWindow.close();
    infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
    infoWindow.open(draggableMarker.map, draggableMarker);
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

function initMap() {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 37.424563902650114, lng: -122.09512859577026 },
      zoom: 17,
      mapId: "4504f8b37365c3d0",
    }
  );

  const markerView01 = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.4239163, lng: -122.094 },
    title: "This marker is visible at zoom level 15 and higher.",
  });

  const markerView02 = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.4245, lng: -122.096 },
    title: "This marker is visible at zoom level 16 and higher.",
  });

  const markerView03 = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.4249, lng: -122.095 },
    title: "This marker is visible at zoom level 17 and higher.",
  });

  const markerView04 = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.425, lng: -122.0955 },
    title: "This marker is visible at zoom level 18 and higher.",
  });
  map.addListener("zoom_changed", () => {
    const zoom = map.getZoom();
    if (zoom) {
      // Only show each marker above a certain zoom level.
      markerView01.map = zoom > 14 ? map : null;
      markerView02.map = zoom > 15 ? map : null;
      markerView03.map = zoom > 16 ? map : null;
      markerView04.map = zoom > 17 ? map : null;
    }
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

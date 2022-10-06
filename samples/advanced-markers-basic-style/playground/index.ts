const parser = new DOMParser();

function initMap() {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 37.419, lng: -122.02 },
      zoom: 14,
      mapId: "4504f8b37365c3d0",
    }
  );

  // Each PinView is paired with a MarkerView to demonstrate setting each parameter.

  // Default marker with title text (no PinView).
  const markerViewWithText = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.419, lng: -122.03 },
    title: "Title text for the marker at lat: 37.419, lng: -122.03",
  });

  // Adjust the scale.
  const pinViewScaled = new google.maps.marker.PinView({
    scale: 1.5,
  });
  const markerViewScaled = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.419, lng: -122.02 },
    content: pinViewScaled.element,
  });

  // Change the background color.
  const pinViewBackground = new google.maps.marker.PinView({
    background: "#FBBC04",
  });
  const markerViewBackground = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.419, lng: -122.01 },
    content: pinViewBackground.element,
  });

  // Change the border color.
  const pinViewBorder = new google.maps.marker.PinView({
    borderColor: "#137333",
  });
  const markerViewBorder = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.415, lng: -122.03 },
    content: pinViewBorder.element,
  });

  // Change the glyph color.
  const pinViewGlyph = new google.maps.marker.PinView({
    glyphColor: "white",
  });
  const markerViewGlyph = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.415, lng: -122.02 },
    content: pinViewGlyph.element,
  });

  // Hide the glyph.
  const pinViewNoGlyph = new google.maps.marker.PinView({
    glyph: "",
  });
  const markerViewNoGlyph = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.415, lng: -122.01 },
    content: pinViewNoGlyph.element,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

window.initMap = initMap;
export {};

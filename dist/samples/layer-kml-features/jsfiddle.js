function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 37.06, lng: -95.68 },
  });
  const kmlLayer = new google.maps.KmlLayer({
    url: "http://googlemaps.github.io/kml-samples/kml/Placemark/placemark.kml",
    suppressInfoWindows: true,
    map: map,
  });
  kmlLayer.addListener("click", (kmlEvent) => {
    const text = kmlEvent.featureData.description;
    showInContentWindow(text);
  });

  function showInContentWindow(text) {
    const sidediv = document.getElementById("content-window");
    sidediv.innerHTML = text;
  }
}

/**
 * This sample sets the gesture handling mode to 'cooperative',
 * which means that on a mobile device, the user must swipe with one
 * finger to scroll the page and two fingers to pan the map.
 */
function initMap() {
  const center = new google.maps.LatLng({ lat: -25.363, lng: 131.044 });
  const zoom = 6;
  new google.maps.Map(document.getElementById("map"), {
    zoom,
    center,
    minZoom: zoom - 2,
    maxZoom: zoom + 2,
    restriction: {
      latLngBounds: {
        north: -20,
        south: 30,
        east: 140,
        west: 125,
      },
      strictBounds: true,
    },
  });
}

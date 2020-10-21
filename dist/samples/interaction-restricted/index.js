// [START maps_interaction_restricted]
/**
 * This sample sets the gesture handling mode to 'cooperative',
 * which means that on a mobile device, the user must swipe with one
 * finger to scroll the page and two fingers to pan the map.
 */
function initMap() {
  const center = new google.maps.LatLng({ lat: -25.363, lng: 131.044 });
  const zoom = 4;
  new google.maps.Map(
    document.getElementById("map"),
    // [START maps_interaction_restricted_mapoptions]
    {
      zoom,
      center,
      minZoom: zoom - 2,
      maxZoom: zoom + 2,
      restriction: {
        latLngBounds: {
          north: -20,
          south: -30,
          east: 140,
          west: 120,
        },
        strictBounds: true,
      },
    }
    // [END maps_interaction_restricted_mapoptions]
  );
}
// [END maps_interaction_restricted]

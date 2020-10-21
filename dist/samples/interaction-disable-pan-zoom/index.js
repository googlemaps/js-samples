// [START maps_interaction_disable_pan_zoom]
/**
 * This sample sets the gesture handling mode to 'cooperative',
 * which means that on a mobile device, the user must swipe with one
 * finger to scroll the page and two fingers to pan the map.
 */
function initMap() {
  const center = { lat: -25.363, lng: 131.044 };
  const zoom = 4;
  new google.maps.Map(
    document.getElementById("map"),
    // [START maps_interaction_disable_pan_zoom_mapoptions]
    {
      zoom,
      center,
      gestureHandling: "none",
      zoomControl: false,
    }
    // [END maps_interaction_disable_pan_zoom_mapoptions]
  );
}
// [END maps_interaction_disable_pan_zoom]

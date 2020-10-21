// [START maps_interaction_disable_pan_zoom]
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

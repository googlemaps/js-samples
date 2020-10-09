// [START maps_control_options]
// You can set control options to change the default position or style of many
// of the map controls.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ["roadmap", "terrain"],
    },
  });
}
// [END maps_control_options]

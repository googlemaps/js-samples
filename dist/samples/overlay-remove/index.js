// [START maps_overlay_remove]
// This example adds a UI control allowing users to remove the
// ground overlay from the map.
let historicalOverlay;
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 40.74, lng: -74.18 },
  });
  const imageBounds = {
    north: 40.773941,
    south: 40.712216,
    east: -74.12544,
    west: -74.22655,
  };
  historicalOverlay = new google.maps.GroundOverlay(
    "https://storage.googleapis.com/geo-devrel-public-buckets/newark_nj_1922-661x516.jpeg",
    imageBounds
  );
  addOverlay();
}

function addOverlay() {
  historicalOverlay.setMap(map);
}

// [START maps_overlay_remove_region_removal]
function removeOverlay() {
  historicalOverlay.setMap(null);
}
// [END maps_overlay_remove_region_removal]
// [END maps_overlay_remove]

// [START maps_earthquake_heatmap_weighted]
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: new google.maps.LatLng(2.8, -187.3),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
  });
  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}

const eqfeed_callback = function (results) {
  // TODO fix @types/googlemaps
  const heatmapData = [];

  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const magnitude = results.features[i].properties.mag;
    const weightedLoc = {
      location: latLng,
      weight: Math.pow(2, magnitude),
    };
    heatmapData.push(weightedLoc);
  }
  const heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData,
    dissipating: false,
    map: map,
  });
};
// [END maps_earthquake_heatmap_weighted]

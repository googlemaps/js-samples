// [START maps_place_id]
let map;

function initMap() {
  // Create a map centered in Pyrmont, Sydney (Australia).
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8666, lng: 151.1958 },
    zoom: 15,
  });
  // Search for Google's office in Australia.
  const request = {
    location: map.getCenter(),
    radius: 500,
    query: "Google Sydney",
  };
  const service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the location from the PlacesService.
function callback(results, status) {
  if (
    status == google.maps.places.PlacesServiceStatus.OK &&
    results &&
    results[0].geometry &&
    results[0].geometry.location
  ) {
    new google.maps.Marker({
      map,
      position: results[0].geometry.location,
    });
  }
}
// [END maps_place_id]

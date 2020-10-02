/*
 * Click the map to set a new location for the Street View camera.
 */
let map;
let panorama;

function initMap() {
  const berkeley = { lat: 37.869085, lng: -122.254775 };
  const sv = new google.maps.StreetViewService();
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano")
  );
  // Set up the map.
  map = new google.maps.Map(document.getElementById("map"), {
    center: berkeley,
    zoom: 16,
    streetViewControl: false,
  });
  // Set the initial Street View camera to the center of the map
  sv.getPanorama({ location: berkeley, radius: 50 }, processSVData);
  // Look for a nearby Street View panorama when the map is clicked.
  // getPanorama will return the nearest pano when the given
  // radius is 50 meters or less.
  map.addListener("click", (event) => {
    sv.getPanorama({ location: event.latLng, radius: 50 }, processSVData);
  });
}

function processSVData(data, status) {
  if (status === "OK") {
    const location = data.location;
    const marker = new google.maps.Marker({
      position: location.latLng,
      map,
      title: location.description,
    });
    panorama.setPano(location.pano);
    panorama.setPov({
      heading: 270,
      pitch: 0,
    });
    panorama.setVisible(true);
    marker.addListener("click", () => {
      const markerPanoID = location.pano;
      // Set the Pano to use the passed panoID.
      panorama.setPano(markerPanoID);
      panorama.setPov({
        heading: 270,
        pitch: 0,
      });
      panorama.setVisible(true);
    });
  } else {
    console.error("Street View data not found for this location.");
  }
}

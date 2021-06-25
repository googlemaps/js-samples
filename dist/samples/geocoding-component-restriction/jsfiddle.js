function initMap() {
  const geocoder = new google.maps.Geocoder();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: -33.865, lng: 151.209 },
  });
  document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, map) {
  geocoder
    .geocode({
      address: "483 George St.",
      componentRestrictions: {
        country: "AU",
        postalCode: "2000",
      },
    })
    .then(({ results }) => {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map,
        position: results[0].geometry.location,
      });
    })
    .catch((e) =>
      window.alert("Geocode was not successful for the following reason: " + e)
    );
}

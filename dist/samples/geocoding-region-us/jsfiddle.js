function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
  });
  const geocoder = new google.maps.Geocoder();

  geocoder
    .geocode({ address: "Toledo" })
    .then((response) => {
      const position = response.results[0].geometry.location;

      map.setCenter(position);
      new google.maps.Marker({
        map,
        position,
      });
    })
    .catch((e) =>
      window.alert("Geocode was not successful for the following reason: " + e)
    );
}

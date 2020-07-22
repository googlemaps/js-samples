"use strict";

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 50.064192,
      lng: -130.605469
    },
    zoom: 3
  });
  const card = document.getElementById("pac-card");
  const input = document.getElementById("pac-input");
  const countries = document.getElementById("country-selector");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
  const autocomplete = new google.maps.places.Autocomplete(input); // Set initial restrict to the greater list of countries.

  autocomplete.setComponentRestrictions({
    country: ["us", "pr", "vi", "gu", "mp"]
  }); // Specify only the data fields that are needed.

  autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);
  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29)
  });
  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);
    const place = autocomplete.getPlace();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    } // If the place has a geometry, then present it on a map.

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17); // Why 17? Because it looks good.
    }

    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    let address = "";

    if (place.address_components) {
      address = [
        (place.address_components[0] &&
          place.address_components[0].short_name) ||
          "",
        (place.address_components[1] &&
          place.address_components[1].short_name) ||
          "",
        (place.address_components[2] &&
          place.address_components[2].short_name) ||
          ""
      ].join(" ");
    }

    infowindowContent.children["place-icon"].src = place.icon;
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent = address;
    infowindow.open(map, marker);
  }); // Sets a listener on a given radio button. The radio buttons specify
  // the countries used to restrict the autocomplete search.

  function setupClickListener(id, countries) {
    const radioButton = document.getElementById(id);
    radioButton.addEventListener("click", () => {
      autocomplete.setComponentRestrictions({
        country: countries
      });
    });
  }

  setupClickListener("changecountry-usa", "us");
  setupClickListener("changecountry-usa-and-uot", [
    "us",
    "pr",
    "vi",
    "gu",
    "mp"
  ]);
}

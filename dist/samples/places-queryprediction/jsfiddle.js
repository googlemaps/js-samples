"use strict";

// This example retrieves autocomplete predictions programmatically from the
// autocomplete service, and displays them as an HTML list.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE&libraries=places">
function initService() {
  const displaySuggestions = function (predictions, status) {
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }

    predictions.forEach((prediction) => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(prediction.description));
      document.getElementById("results").appendChild(li);
    });
  };

  const service = new google.maps.places.AutocompleteService();
  service.getQueryPredictions(
    {
      input: "pizza near Syd",
    },
    displaySuggestions
  );
}

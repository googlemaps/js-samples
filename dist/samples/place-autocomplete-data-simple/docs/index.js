/**
 * @license
 * Copyright 2024 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_place_autocomplete_data_simple]
/**
 * Demonstrates making a single request for Place predictions, then requests Place Details for the first result.
 */
async function init() {
  // @ts-ignore
  const { Place, AutocompleteSessionToken, AutocompleteSuggestion } =
    await google.maps.importLibrary("places");
  // [START maps_place_autocomplete_data_simple_request]
  // Add an initial request body.
  // [START maps_place_autocomplete_data_simple_request_body]
  let request = {
    input: "Tadi",
    locationRestriction: {
      west: -122.44,
      north: 37.8,
      east: -122.39,
      south: 37.78,
    },
    origin: { lat: 37.7893, lng: -122.4039 },
    includedPrimaryTypes: ["restaurant"],
    language: "en-US",
    region: "us",
  };
  // [END maps_place_autocomplete_data_simple_request_body]
  // [START maps_place_autocomplete_data_simple_token]
  // Create a session token.
  const token = new AutocompleteSessionToken();

  // Add the token to the request.
  // @ts-ignore
  request.sessionToken = token;

  // [END maps_place_autocomplete_data_simple_token]
  // [END maps_place_autocomplete_data_simple_request]
  // [START maps_place_autocomplete_data_simple_get_suggestions]
  // Fetch autocomplete suggestions.
  const { suggestions } =
    await AutocompleteSuggestion.fetchAutocompleteSuggestions(request);
  const title = document.getElementById("title");

  title.appendChild(
    document.createTextNode('Query predictions for "' + request.input + '":'),
  );

  for (let suggestion of suggestions) {
    const placePrediction = suggestion.placePrediction;
    // Create a new list element.
    const listItem = document.createElement("li");
    const resultsElement = document.getElementById("results");

    listItem.appendChild(
      document.createTextNode(placePrediction.text.toString()),
    );
    resultsElement.appendChild(listItem);
  }

  // [END maps_place_autocomplete_data_simple_get_suggestions]
  // [START maps_place_autocomplete_data_simple_prediction]
  let place = suggestions[0].placePrediction.toPlace(); // Get first predicted place.

  // [START maps_place_autocomplete_data_simple_fetch]
  await place.fetchFields({
    fields: ["displayName", "formattedAddress"],
  });

  // [END maps_place_autocomplete_data_simple_fetch]
  const placeInfo = document.getElementById("prediction");

  placeInfo.textContent =
    "First predicted place: " +
    place.displayName +
    ": " +
    place.formattedAddress;
  // [END maps_place_autocomplete_data_simple_prediction]
}

init();
// [END maps_place_autocomplete_data_simple]

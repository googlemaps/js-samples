/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START maps_places_autocomplete_addressform]
// This sample uses the Places Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

let autocomplete: google.maps.places.Autocomplete;
let address1Field: HTMLInputElement;
let address2Field: HTMLInputElement;
let postalField: HTMLInputElement;

const componentLength = {
  street_number: "long_name",
  route: "short_name",
  locality: "long_name",
  administrative_area_level_1: "short_name",
  postal_code: "long_name",
  postal_code_suffix: "long_name",
  country: "long_name",
};

function initAutocomplete() {
  address1Field = document.querySelector("#shipaddress") as HTMLInputElement;
  address2Field = document.querySelector("#address2") as HTMLInputElement;
  postalField = document.querySelector("#postal_code") as HTMLInputElement;
  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  autocomplete = new google.maps.places.Autocomplete(address1Field, {
    componentRestrictions: { country: ["us", "ca"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  address1Field.focus();

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

// [START maps_places_autocomplete_addressform_fillform]
function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (const component of place.address_components) {
    // @ts-ignore remove once typings fixed
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        address1 = component[componentLength[componentType]] + " " + address1;
        break;
      }

      case "route": {
        address1 += component[componentLength[componentType]];
        break;
      }

      case "postal_code": {
        postcode = component[componentLength[componentType]] + postcode;
        break;
      }

      case "postal_code_suffix": {
        postcode += "-" + component[componentLength[componentType]];
        break;
      }

      default: {
        if (componentLength[componentType]) {
          const val = component[componentLength[componentType]];
          (document.getElementById(
            componentType
          ) as HTMLInputElement).value = val;
        }
        break;
      }
    }
  }

  address1Field.value = address1;
  postalField.value = postcode;

  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
  address2Field.focus();
}
// [END maps_places_autocomplete_addressform_fillform]

// [END maps_places_autocomplete_addressform]
export { initAutocomplete };

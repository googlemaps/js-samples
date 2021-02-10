// This sample uses the Places Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE&libraries=places">
let autocomplete;
let address1Field;
let address2Field;
let postalField;
const componentFields = [
  "address2",
  "locality",
  "administrative_area_level_1",
  "postal_code",
  "country",
];
const componentLength = {
  street_number: "long_name",
  route: "short_name",
  locality: "long_name",
  administrative_area_level_1: "short_name",
  postal_code: "long_name",
  postal_code_suffix: "long_name",
  country: "long_name",
};
const textFields = [].map.call(
  document.querySelectorAll(".mdc-text-field"),
  (el) => {
    return new mdc.textField.MDCTextField(el);
  }
);

function initAutocomplete() {
  address1Field = document.querySelector("#address1");
  address2Field = document.querySelector("#address2");
  postalField = document.querySelector("#postal_code");
  console.log(address1Field.value + "address1");
  console.log(address2Field.value + "address2");
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(address1Field, {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";

  for (const component of componentFields) {
    const classname = component + "-outer";
    const element = document.getElementById(classname);
    const pattern = new RegExp(
      "(?:)" + "mdc-text-field--disabled" + "(?:)",
      "g"
    );
    element.className = element.className.replace(pattern, "");
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (const component of place.address_components) {
    const addressType = component.types[0];

    switch (addressType) {
      case "street_number": {
        address1 = component[componentLength[addressType]] + " " + address1;
        break;
      }

      case "route": {
        address1 += component[componentLength[addressType]];
        break;
      }

      case "postal_code": {
        postcode = component[componentLength[addressType]] + postcode;
        break;
      }

      case "postal_code_suffix": {
        postcode += "-" + component[componentLength[addressType]];
        break;
      }

      default: {
        if (componentLength[addressType]) {
          const val = component[componentLength[addressType]];
          // eslint-disable-next-line prettier/prettier
          document.getElementById(addressType).value = val;
        }
        break;
      }
    }
  }
  console.log(address1);
  console.log(postcode);
  address1Field.value = address1;
  postalField.value = postcode;
  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
  address2Field.focus();
}

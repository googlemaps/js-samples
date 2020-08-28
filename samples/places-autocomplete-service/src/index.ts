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
// [START maps_places_autocomplete_service]

let autocompleteService: google.maps.places.AutocompleteService;
let placesService: google.maps.places.PlacesService;

let requestElement: HTMLPreElement;
let responseElement: HTMLPreElement;
let inputElement: HTMLInputElement;
let biasToMapSwitchElement: HTMLInputElement;
let autocompleteTypeElement: HTMLInputElement;

let map: google.maps.Map;

const debounce = <F extends (...args: any[]) => void>(delay: number, fn: F) => {
  let timeout = 0;

  const debounced = (...args: any[]) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), delay);
  };

  return debounced as (...args: Parameters<F>) => void;
};

const initialize = (): void => {
  map = new google.maps.Map(document.getElementById("map")!, {
    center: { lat: 47.609414458375674, lng: -122.33897030353548 },
    zoom: 12
  });

  autocompleteService = new google.maps.places.AutocompleteService();
  placesService = new google.maps.places.PlacesService(map);

  inputElement = document.getElementById("input") as HTMLInputElement;
  requestElement = document.getElementById("request") as HTMLPreElement;
  responseElement = document.getElementById("response") as HTMLPreElement;
  biasToMapSwitchElement = document.getElementById(
    "bias-to-map"
  ) as HTMLInputElement;
  autocompleteTypeElement = document.getElementById(
    "autocomplete-type"
  ) as HTMLInputElement;

  const autocompleteTypeListElement = document.getElementById(
    "autocomplete-type-list"
  ) as HTMLUListElement;
  ["", "establishment", "geocode", "address", "(cities)", "(regions)"].forEach(
    type => {
      const item = document.createElement("LI");
      item.classList.add("mdc-list-item");
      item.setAttribute("data-value", type);

      const itemText = document.createElement("SPAN") as HTMLSpanElement;
      itemText.classList.add("mdc-list-item__text");
      itemText.innerText = type;

      item.appendChild(itemText);
      autocompleteTypeListElement.appendChild(item);
    }
  );

  initializeMaterialDesignComponents();

  inputElement.addEventListener("input", inputChangeCallback);
  biasToMapSwitchElement.addEventListener("change", inputChangeCallback);
  map.addListener("bounds_changed", () => {
    if (biasToMapSwitchElement.checked) {
      inputChangeCallback();
    }
  });
};

const inputChangeCallback = debounce(100, () => {
  if (!inputElement.value) {
    return;
  }
  const request: google.maps.places.AutocompletionRequest = {
    input: inputElement.value
  };

  const bounds = map.getBounds();

  if (biasToMapSwitchElement.checked && bounds) {
    request.bounds = bounds;
  }

  const selectedAutocompleteType = document.querySelector(
    "#autocomplete-type-list > .mdc-list-item--selected"
  );

  if (
    selectedAutocompleteType &&
    selectedAutocompleteType.getAttribute("data-value") !== ""
  ) {
    request.types = [selectedAutocompleteType.getAttribute("data-value")!];
  }

  requestElement.innerText = JSON.stringify(request, null, 2);
  autocompleteService.getPlacePredictions(request, predictionsCallback);
});

const predictionsCallback = (
  results: google.maps.places.AutocompletePrediction[],
  status: google.maps.places.PlacesServiceStatus
) => {
  responseElement.innerText = JSON.stringify({ results, status }, null, 2);
};

const initializeMaterialDesignComponents = () => {
  document.querySelectorAll(".mdc-text-field").forEach(
    el =>
      // @ts-ignore
      new mdc.textField.MDCTextField(el)
  );

  document
    .querySelectorAll(".mdc-switch")
    // @ts-ignore
    .forEach(el => new mdc.switchControl.MDCSwitch(el));

  document.querySelectorAll(".mdc-select").forEach(el =>
    // @ts-ignore
    new mdc.select.MDCSelect(el).listen("MDCSelect:change", inputChangeCallback)
  );

  // @ts-ignore
  const tabBar = new mdc.tabBar.MDCTabBar(
    document.querySelector(".mdc-tab-bar")
  );
  const contentElements = document.querySelectorAll(".tab-content");

  tabBar.listen("MDCTabBar:activated", event => {
    document
      .querySelector(".tab-content--active")!
      .classList.remove("tab-content--active");
    contentElements[event.detail.index].classList.add("tab-content--active");
  });
};

// [END maps_places_autocomplete_service]
export { initialize };

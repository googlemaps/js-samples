let autocompleteService;
let placesService;
let requestElement;
let responseElement;
let inputElement;
let biasToMapSwitchElement;
let autocompleteTypeElement;
let map;

const debounce = (delay, fn) => {
  let timeout = 0;

  const debounced = (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), delay);
  };
  return debounced;
};

const initialize = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.609414458375674, lng: -122.33897030353548 },
    zoom: 12,
  });
  autocompleteService = new google.maps.places.AutocompleteService();
  placesService = new google.maps.places.PlacesService(map);
  inputElement = document.getElementById("input");
  requestElement = document.getElementById("request");
  responseElement = document.getElementById("response");
  biasToMapSwitchElement = document.getElementById("bias-to-map");
  autocompleteTypeElement = document.getElementById("autocomplete-type");
  const autocompleteTypeListElement = document.getElementById(
    "autocomplete-type-list"
  );
  ["", "establishment", "geocode", "address", "(cities)", "(regions)"].forEach(
    (type) => {
      const item = document.createElement("LI");
      item.classList.add("mdc-list-item");
      item.setAttribute("data-value", type);
      const itemText = document.createElement("SPAN");
      itemText.classList.add("mdc-list-item__text");
      itemText.innerText = type;
      item.appendChild(itemText);
      autocompleteTypeListElement.appendChild(item);
    }
  );
  inputElement.addEventListener("input", inputChangeCallback);
  biasToMapSwitchElement.addEventListener("change", inputChangeCallback);
  map.addListener("bounds_changed", () => {
    if (biasToMapSwitchElement.checked) {
      inputChangeCallback();
    }
  });
  biasToMapSwitchElement.checked = true;
  initializeMaterialDesignComponents();
  inputChangeCallback();
};
const inputChangeCallback = debounce(100, () => {
  const request = {
    input: inputElement.value,
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
    request.types = [selectedAutocompleteType.getAttribute("data-value")];
  }
  requestElement.innerText = JSON.stringify(request, null, 2);

  if (!inputElement.value) {
    return;
  }
  autocompleteService.getPlacePredictions(request, predictionsCallback);
});

const predictionsCallback = (results, status) => {
  responseElement.innerText = JSON.stringify({ results, status }, null, 2);
};

const initializeMaterialDesignComponents = () => {
  document
    .querySelectorAll(".mdc-text-field")
    .forEach((el) => new mdc.textField.MDCTextField(el));
  document
    .querySelectorAll(".mdc-switch")

    .forEach((el) => new mdc.switchControl.MDCSwitch(el));
  document
    .querySelectorAll(".mdc-select")
    .forEach((el) =>
      new mdc.select.MDCSelect(el).listen(
        "MDCSelect:change",
        inputChangeCallback
      )
    );

  const tabBar = new mdc.tabBar.MDCTabBar(
    document.querySelector(".mdc-tab-bar")
  );
  const contentElements = document.querySelectorAll(".tab-content");
  tabBar.listen("MDCTabBar:activated", (event) => {
    document
      .querySelector(".tab-content--active")
      .classList.remove("tab-content--active");
    contentElements[event.detail.index].classList.add("tab-content--active");
  });
};

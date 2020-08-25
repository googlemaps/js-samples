"use strict";

let map;
let autocomplete;
let autocompleteInput;
let distanceMatrixService;
let progress;
let isUpdateInProgress = false;
const stores = []; // Initialize and add the map

function initMap() {
  distanceMatrixService = new google.maps.DistanceMatrixService();
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 39.79,
      lng: -104.98
    },
    zoom: 10
  });
  new mdc.textField.MDCTextField(document.querySelector(".mdc-text-field"));
  autocompleteInput = document.getElementById("search-input");
  autocomplete = new google.maps.places.Autocomplete(autocompleteInput, {});
  autocomplete.addListener("place_changed", placeChanged);
  autocomplete.bindTo("bounds", map); // bias to map viewport

  fetch(
    "https://carto.nationalmap.gov/arcgis/rest/services/structures/MapServer/23/query?where=STATE%3D%27CO%27&returnGeometry=true&outSR=4326&f=pjson"
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      const features = data.features;
      const markers = [];
      features.forEach(
        ({ attributes: { NAME: name }, geometry: { x: lng, y: lat } }) => {
          stores.push({
            name,
            location: {
              lat,
              lng
            },
            address: ""
          });
          const marker = new google.maps.Marker({
            position: {
              lat,
              lng
            }
          });
          marker.addListener("click", () => {
            update(
              new google.maps.LatLng({
                lat,
                lng
              })
            );
          });
          markers.push(marker);
        }
      );
      new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
      });
      progress.done();
      update(map.getCenter());
    });
  document.getElementById("near-me").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          update(
            new google.maps.LatLng({
              lat,
              lng
            })
          );
        }
      );
    }
  });
  document.getElementById("refresh").addEventListener("click", () => {
    update(map.getCenter());
  });
}

function renderCards(stores) {
  const cardsDiv = document.getElementById("cards");
  cardsDiv.innerHTML = "";
  stores
    .slice(0, 25)
    .forEach(
      ({ name, location, address, travelDistanceText, travelDurationText }) => {
        const card = document.createElement("div");
        card.classList.add("mdc-card", "mdc-card--outlined");
        card.innerHTML = `
<div class="mdc-card__primary-action">
  <div id="card-header">
    <h2 class="mdc-typography--headline6">${name}</h2>
  </div>
</div>
<div id="card-body">
  </div>
<div class="mdc-card__actions">
  <a class="mdc-button mdc-card__action mdc-card__action--button" 
    target="_blank" href="https://maps.google.com?q=${
      address ? address : name
    }">
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">Directions</span>
  </a>
  <button class="mdc-button mdc-card__action mdc-card__action--button">
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">More Information</span>
  </button>
</div>`;
        const cardBody = card.querySelector("#card-body");

        if (address) {
          cardBody.innerHTML = `<h2 class="mdc-typography--body1">${address}</h2>`;
        }

        if (travelDistanceText) {
          cardBody.innerHTML += `<h2 class="mdc-typography--body2">${travelDistanceText}, ${travelDurationText}</h2>`;
        }

        card
          .querySelector(".mdc-card__primary-action")
          .addEventListener("click", () => {
            map.panTo(location);
          });
        cardsDiv.appendChild(card);
      }
    );
  cardsDiv.scrollTo(0, 0);
}

function getDistances(place) {
  const origins = [place];
  return new Promise((resolve, reject) => {
    const callback = (response, status) => {
      if (status === google.maps.DistanceMatrixStatus.OK) {
        resolve(response);
      } else {
        reject(status);
      }
    };

    distanceMatrixService.getDistanceMatrix(
      {
        origins,
        destinations: stores.slice(0, 25).map(store => store.location),
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      },
      callback
    );
  });
}

function placeChanged() {
  autocompleteInput.disabled = true;
  const placeResult = autocomplete.getPlace();
  const location = placeResult.geometry.location;
  update(location);
}

function update(location) {
  if (isUpdateInProgress) {
    alert("Update in progress, please try again.");
    return;
  }

  autocompleteInput.disabled = true;
  isUpdateInProgress = true;
  map.setCenter(location); // reset values

  stores.forEach(store => {
    delete store.travelDistance;
    delete store.travelDistanceText;
    delete store.travelDuration;
    delete store.travelDurationText;
  }); // sort by distance

  stores.sort((a, b) => {
    return (
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(a.location),
        location
      ) -
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(b.location),
        location
      )
    );
  });
  getDistances(location)
    .then(response => {
      for (let i = 0; i < response.rows[0].elements.length; i++) {
        stores[i].address = response.destinationAddresses[i];
        stores[i].travelDistance = response.rows[0].elements[i].distance.value;
        stores[i].travelDistanceText =
          response.rows[0].elements[i].distance.text;
        stores[i].travelDuration = response.rows[0].elements[i].duration.value;
        stores[i].travelDurationText =
          response.rows[0].elements[i].duration.text;
      }
    })
    .finally(() => {
      renderCards(stores);
      autocompleteInput.disabled = false;
      isUpdateInProgress = false;
    });
}

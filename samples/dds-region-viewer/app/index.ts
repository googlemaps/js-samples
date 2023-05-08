/**
* @license
* Copyright 2022 Google LLC. All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

/**
 * Data-driven styling region coverage viewer!
 * - View feature boundaries around the world.
 * - Set color for fill and stroke of feature polygons.
 */

let map: google.maps.Map;
let countryMenu: HTMLSelectElement;
let featureMenu: HTMLSelectElement;
let searchInput: HTMLInputElement;
let fillColorPicker: HTMLInputElement;
let strokeColorPicker: HTMLInputElement;
let contentDiv: HTMLElement;
let autoComplete: google.maps.places.Autocomplete;
let placesService: google.maps.places.PlacesService;

let allLayers;
let countryLayer;
let admin1Layer;
let admin2Layer;
let localityLayer;
let postalCodeLayer;

let selectedPlaceId: string;

function initMap() {
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 39.32, lng: -95 }, // Near the center of the contintental U.S.
        zoom: 6,
        mapTypeControl: false,
        streetViewControl: false,
        // In the cloud console, configure this Map ID with a style that enables 
        // ALL Data Driven Styling types.
        mapId: '1bf5295b744a394a',
    });

    const card = document.getElementById('pac-card') as HTMLElement;
    contentDiv = document.getElementById('pac-content') as HTMLElement;
    searchInput = document.getElementById('pac-input') as HTMLInputElement;
    countryMenu = document.getElementById('country-select') as HTMLSelectElement;
    featureMenu = document.getElementById('feature-type-select') as HTMLSelectElement;
    fillColorPicker = document.getElementById('fill-color-picker') as HTMLInputElement;
    strokeColorPicker = document.getElementById('stroke-color-picker') as HTMLInputElement;

    // Set up input events.
    countryMenu.addEventListener('change', onCountrySelected);
    featureMenu.addEventListener('change', featureTypeChanged);
    fillColorPicker.addEventListener('change', styleChanged);
    strokeColorPicker.addEventListener('change', styleChanged);

    // Inject the UI HTML.
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(sidebar);

    // Set up the Autocomplete widget.
    const autocompleteOptions = {
        fields: ['place_id', 'type'],
        strictBounds: false,
        types: ['(regions)'],
    };

    autoComplete = new google.maps.places.Autocomplete(searchInput, autocompleteOptions);
    placesService = new google.maps.places.PlacesService(map);

    autoComplete.addListener('place_changed', () => {
        const place = autoComplete.getPlace() as google.maps.places.PlaceResult;
        const types = place.types as string[];

        // Change the UI depending on the returned place.
        switch (types[0]) {
            case 'country':
                featureMenu.selectedIndex = 0;
                break;
            case 'administrative_area_level_1':
                featureMenu.selectedIndex = 1;
                break;
            case 'administrative_area_level_2':
                featureMenu.selectedIndex = 2;
                break;
            case 'locality':
                featureMenu.selectedIndex = 3; 
                break;
            case 'postal_code':
                featureMenu.selectedIndex = 4;
                break;
            default:
                break;
        }

        showSelectedPolygon(place.place_id);

    });

    // Add all the feature layers.
    //@ts-ignore
    countryLayer = map.getFeatureLayer('COUNTRY');
    //@ts-ignore
    admin1Layer = map.getFeatureLayer('ADMINISTRATIVE_AREA_LEVEL_1');
    //@ts-ignore
    admin2Layer = map.getFeatureLayer('ADMINISTRATIVE_AREA_LEVEL_2');
    //@ts-ignore
    localityLayer = map.getFeatureLayer('LOCALITY');
    //@ts-ignore
    postalCodeLayer = map.getFeatureLayer('POSTAL_CODE');

    // Add event listeners for feature layers.
    countryLayer.addListener('click', handlePlaceClick);
    admin1Layer.addListener('click', handlePlaceClick);
    admin2Layer.addListener('click', handlePlaceClick);
    localityLayer.addListener('click', handlePlaceClick);
    postalCodeLayer.addListener('click', handlePlaceClick);

    // List of all the layers when they get initialized.
    allLayers = [countryLayer, admin1Layer, admin2Layer, localityLayer, postalCodeLayer];

    // Init map styles.
    applyStyle();

    // Set up country and feature menus.
    buildMenu();
    onCountrySelected();
}

// Restyle and make a request when the feature type is changed.
function featureTypeChanged() {
    // Style for coloring the outline of the entire feature type.
    let styleStrokeOnly = /** @type {!google.maps.FeatureStyleOptions} */({
        fillColor: 'white',
        fillOpacity: 0.01,
        strokeColor: strokeColorPicker.value,
        strokeOpacity: 1.0,
        strokeWeight: 2.0,
    });

    revertStyles();
    selectedPlaceId = '';
    contentDiv.innerHTML = ''; 

    // Apply the style to the selected feature layer.
    switch (featureMenu.value) {
        case 'country':
            countryLayer.style = styleStrokeOnly;
            break;
        case 'administrative_area_level_1':
            admin1Layer.style = styleStrokeOnly;
            break;
        case 'administrative_area_level_2':
            admin2Layer.style = styleStrokeOnly;
            break;
        case 'locality':
            localityLayer.style = styleStrokeOnly;
            break;
        case 'postal_code':
            postalCodeLayer.style = styleStrokeOnly;
            break;
        default:
            break;
    }
}

// Restyle when the stroke or fill is changed.
function styleChanged() {
    if (selectedPlaceId) {
        applyStyle(selectedPlaceId);
    }
}

// Apply styling to a polygon.
function applyStyle(placeid?) {
    // Define styles.
    let styleStrokeOnly = /** @type {!google.maps.FeatureStyleOptions} */({
        strokeColor: strokeColorPicker.value,
        strokeOpacity: 1.0,
        strokeWeight: 2.0,
        fillColor: 'white',
        fillOpacity: 0.1
    });

    let styleStrokeFill = /** @type {!google.maps.FeatureStyleOptions} */({
        strokeColor: strokeColorPicker.value,
        strokeOpacity: 1.0,
        strokeWeight: 2.0,
        fillColor: fillColorPicker.value,
        fillOpacity: 0.5
    });

    revertStyles();

    const featureStyle = (params) => {
        if (params.feature.placeId == placeid) {
            return styleStrokeFill;
        } else {
            return styleStrokeOnly;
        }
    }

    // Only style the selected feature type.
    switch (featureMenu.value) {
        case 'country':
            countryLayer.style = featureStyle;
            break;
        case 'administrative_area_level_1':
            admin1Layer.style = featureStyle;
            break;
        case 'administrative_area_level_2':
            admin2Layer.style = featureStyle;
            break;
        case 'locality':
            localityLayer.style = featureStyle;
            break;
        case 'postal_code':
            postalCodeLayer.style = featureStyle;
            break;
        default:
            break;
    }
}

// Populate the countries menu.
function buildMenu() {
    for (const item of countries) {
        let countryOption = document.createElement('option');
        countryOption.innerHTML = item.name;
        countryOption.value = item.code;
        // Set U.S. as the default.
        if (item.code == "US") {
            countryOption.selected = true;
        }
        countryMenu.appendChild(countryOption);
    }
}

// Populate the feature type menu with the supported feature types.
function onCountrySelected() {
    // Get the selected value.
    let selected = countryMenu.value;

    // Return the data for the selected country.
    const selectedCountry = countries.find((country) => {
        return country.code === selected;
    });

    // Create a map for our values.
    let featureAvailabilityMap = new Map([
        ['country', selectedCountry?.feature.country],
        ['administrative_area_level_1', selectedCountry?.feature.administrative_area_level_1],
        ['administrative_area_level_2', selectedCountry?.feature.administrative_area_level_2],
        ['postal_code', selectedCountry?.feature.postal_code],
        ['locality', selectedCountry?.feature.locality],
    ]);

    // Set the feature list selection to 'country'.
    featureMenu.namedItem('country')!.selected = true; 

    // Do a comparison on the map, and disable any false items.
    for (const item of featureAvailabilityMap) {
        if (item[1] == false) {
            featureMenu.namedItem(item[0])!.disabled = true;
        } else {
            featureMenu.namedItem(item[0])!.disabled = false;
        }
    }

    showSelectedCountry(countryMenu.options[countryMenu.selectedIndex].text);
}

// Restyle all feature layers to be invisible.
function revertStyles() {
    for (const layer of allLayers) {
        layer.style = null;
    }
}

// Apply styling to the clicked place.
function handlePlaceClick(event) {
    let clickedPlaceId = event.features[0].placeId;
    if (!clickedPlaceId) return;
    showSelectedPolygon(clickedPlaceId);
}

// Get the place ID for the selected country, then call showSelectedPolygon().
function showSelectedCountry(countryName) {
    contentDiv.innerHTML = '';
    const request = {
        query: countryName,
        fields: [
            'place_id',
        ],
    };

    placesService.findPlaceFromQuery(request, (place, status) => {
        if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            place
        ) {
            showSelectedPolygon(place[0].place_id);
        }
    });
}

// Event handler for when a polygon is selected.
function showSelectedPolygon(placeid) {
    selectedPlaceId = placeid;
    contentDiv.innerHTML = ''; // Clear the info display.

    const request = {
        placeId: placeid,
        fields: [
            'name',
            'formatted_address',
            'geometry',
            'type'
        ],
    };

    // Make a Place Details request.
    placesService.getDetails(request, (place, status) => {
        if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            place &&
            place.geometry &&
            place.geometry.location
        ) {
            // Zoom to the polygon.
            var viewport = place.geometry?.viewport as google.maps.LatLngBounds;
            map.fitBounds(viewport, 155);

            // Build the HTML.
            contentDiv.appendChild(document.createElement('hr'));

            const types = place.types as string[];

            // Create HTML for place information.
            contentDiv.innerHTML = '<hr><span id="place-info"><b>' + place.formatted_address + 
                '</b><br/> Place ID: <code>' + placeid + '</code>' +
                '<br/> Feature type: <code>' + types[0] + '</code></span><br/>';
        }
    });

    // Call the global styling function.
    applyStyle(placeid);

}
// TODO: Figure out how to get this into an external .js hosted on https://pantheon.corp.google.com/storage/browser/geo-devrel-public-buckets
/** GENERATED FILE, DO NOT EDIT */

const countries = [
    {
        "name": "Afghanistan", 
        "code": "AF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Albania", 
        "code": "AL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Algeria", 
        "code": "DZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "American Samoa", 
        "code": "AS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Andorra", 
        "code": "AD", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Angola", 
        "code": "AO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Anguilla", 
        "code": "AI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Antarctica", 
        "code": "AQ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Antigua and Barbuda", 
        "code": "AG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Argentina", 
        "code": "AR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Armenia", 
        "code": "AM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Aruba", 
        "code": "AW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Australia", 
        "code": "AU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": true,
        }
    },
    {
        "name": "Austria", 
        "code": "AT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Azerbaijan", 
        "code": "AZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Bahrain", 
        "code": "BH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Bangladesh", 
        "code": "BD", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Barbados", 
        "code": "BB", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Belarus", 
        "code": "BY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Belgium", 
        "code": "BE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "Belize", 
        "code": "BZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Benin", 
        "code": "BJ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Bermuda", 
        "code": "BM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Bhutan", 
        "code": "BT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Bolivia", 
        "code": "BO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Bosnia and Herzegovina", 
        "code": "BA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Botswana", 
        "code": "BW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Bouvet Island", 
        "code": "BV", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Brazil", 
        "code": "BR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "British Indian Ocean Territory", 
        "code": "IO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "British Virgin Islands", 
        "code": "VG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Brunei", 
        "code": "BN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Bulgaria", 
        "code": "BG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": true,
        }
    },
    {
        "name": "Burkina Faso", 
        "code": "BF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Burundi", 
        "code": "BI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Cabo Verde", 
        "code": "CV", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Cambodia", 
        "code": "KH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Cameroon", 
        "code": "CM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Canada", 
        "code": "CA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Caribbean Netherlands", 
        "code": "BQ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Cayman Islands", 
        "code": "KY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Central African Republic", 
        "code": "CF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Chad", 
        "code": "TD", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Chile", 
        "code": "CL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "China", 
        "code": "CN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Christmas Island", 
        "code": "CX", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Cocos (Keeling) Islands", 
        "code": "CC", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Colombia", 
        "code": "CO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Comoros", 
        "code": "KM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Cook Islands", 
        "code": "CK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Costa Rica", 
        "code": "CR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Croatia", 
        "code": "HR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Cuba", 
        "code": "CU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Curaçao", 
        "code": "CW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Cyprus", 
        "code": "CY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Czechia", 
        "code": "CZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": true,
        }
    },
    {
        "name": "Côte d'Ivoire", 
        "code": "CI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Democratic Republic of the Congo", 
        "code": "CD", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Denmark", 
        "code": "DK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Djibouti", 
        "code": "DJ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Dominica", 
        "code": "DM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Dominican Republic", 
        "code": "DO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Ecuador", 
        "code": "EC", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Egypt", 
        "code": "EG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "El Salvador", 
        "code": "SV", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Equatorial Guinea", 
        "code": "GQ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Eritrea", 
        "code": "ER", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Estonia", 
        "code": "EE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "Eswatini", 
        "code": "SZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Ethiopia", 
        "code": "ET", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Falkland Islands (Islas Malvinas)", 
        "code": "FK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Faroe Islands", 
        "code": "FO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Fiji", 
        "code": "FJ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Finland", 
        "code": "FI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "France", 
        "code": "FR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "French Guiana", 
        "code": "GF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "French Polynesia", 
        "code": "PF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "French Southern and Antarctic Lands", 
        "code": "TF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Gabon", 
        "code": "GA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Georgia", 
        "code": "GE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Germany", 
        "code": "DE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "Ghana", 
        "code": "GH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Gibraltar", 
        "code": "GI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Greece", 
        "code": "GR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Greenland", 
        "code": "GL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Grenada", 
        "code": "GD", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Guadeloupe", 
        "code": "GP", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Guam", 
        "code": "GU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Guatemala", 
        "code": "GT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Guernsey", 
        "code": "GG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Guinea", 
        "code": "GN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Guinea-Bissau", 
        "code": "GW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Guyana", 
        "code": "GY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Haiti", 
        "code": "HT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Heard Island and McDonald Islands", 
        "code": "HM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Honduras", 
        "code": "HN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Hong Kong", 
        "code": "HK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Hungary", 
        "code": "HU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": true,
        }
    },
    {
        "name": "Iceland", 
        "code": "IS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "India", 
        "code": "IN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "Indonesia", 
        "code": "ID", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Iran", 
        "code": "IR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Iraq", 
        "code": "IQ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Ireland", 
        "code": "IE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Isle of Man", 
        "code": "IM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Israel", 
        "code": "IL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Italy", 
        "code": "IT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Jamaica", 
        "code": "JM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Japan", 
        "code": "JP", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "Jersey", 
        "code": "JE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Jordan", 
        "code": "JO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Kazakhstan", 
        "code": "KZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Kenya", 
        "code": "KE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Kiribati", 
        "code": "KI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Kosovo", 
        "code": "XK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Kuwait", 
        "code": "KW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Kyrgyzstan", 
        "code": "KG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Laos", 
        "code": "LA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Latvia", 
        "code": "LV", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Lebanon", 
        "code": "LB", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Lesotho", 
        "code": "LS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Liberia", 
        "code": "LR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Libya", 
        "code": "LY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Liechtenstein", 
        "code": "LI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Lithuania", 
        "code": "LT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Luxembourg", 
        "code": "LU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": true,
        }
    },
    {
        "name": "Macao", 
        "code": "MO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Madagascar", 
        "code": "MG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Malawi", 
        "code": "MW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Malaysia", 
        "code": "MY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Maldives", 
        "code": "MV", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Mali", 
        "code": "ML", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Malta", 
        "code": "MT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": true,
        }
    },
    {
        "name": "Marshall Islands", 
        "code": "MH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Martinique", 
        "code": "MQ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Mauritania", 
        "code": "MR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Mauritius", 
        "code": "MU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Mayotte", 
        "code": "YT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Mexico", 
        "code": "MX", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Micronesia", 
        "code": "FM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Moldova", 
        "code": "MD", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Monaco", 
        "code": "MC", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Mongolia", 
        "code": "MN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Montenegro", 
        "code": "ME", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Montserrat", 
        "code": "MS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Morocco", 
        "code": "MA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Mozambique", 
        "code": "MZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Myanmar (Burma)", 
        "code": "MM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Namibia", 
        "code": "NA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Nauru", 
        "code": "NR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Nepal", 
        "code": "NP", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Netherlands", 
        "code": "NL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "New Caledonia", 
        "code": "NC", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "New Zealand", 
        "code": "NZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": true,
        }
    },
    {
        "name": "Nicaragua", 
        "code": "NI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Niger", 
        "code": "NE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Nigeria", 
        "code": "NG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Niue", 
        "code": "NU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Norfolk Island", 
        "code": "NF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "North Korea", 
        "code": "KP", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "North Macedonia", 
        "code": "MK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Northern Mariana Islands", 
        "code": "MP", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Norway", 
        "code": "NO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Oman", 
        "code": "OM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Pakistan", 
        "code": "PK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Palau", 
        "code": "PW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Palestine", 
        "code": "PS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Panama", 
        "code": "PA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Papua New Guinea", 
        "code": "PG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Paraguay", 
        "code": "PY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Peru", 
        "code": "PE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Philippines", 
        "code": "PH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Pitcairn Islands", 
        "code": "PN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Poland", 
        "code": "PL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Portugal", 
        "code": "PT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Puerto Rico", 
        "code": "PR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Qatar", 
        "code": "QA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Republic of the Congo", 
        "code": "CG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Romania", 
        "code": "RO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Russia", 
        "code": "RU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Rwanda", 
        "code": "RW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Réunion", 
        "code": "RE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Saint Barthélemy", 
        "code": "BL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha", 
        "code": "SH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Saint Kitts and Nevis", 
        "code": "KN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Saint Lucia", 
        "code": "LC", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Saint Martin", 
        "code": "MF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Saint Pierre and Miquelon", 
        "code": "PM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Saint Vincent and the Grenadines", 
        "code": "VC", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Samoa", 
        "code": "WS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "San Marino", 
        "code": "SM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Saudi Arabia", 
        "code": "SA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Senegal", 
        "code": "SN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Serbia", 
        "code": "RS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Seychelles", 
        "code": "SC", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Sierra Leone", 
        "code": "SL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Singapore", 
        "code": "SG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Sint Maarten", 
        "code": "SX", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Slovakia", 
        "code": "SK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "Slovenia", 
        "code": "SI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "Solomon Islands", 
        "code": "SB", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Somalia", 
        "code": "SO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "South Africa", 
        "code": "ZA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "South Georgia and the South Sandwich Islands", 
        "code": "GS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "South Korea", 
        "code": "KR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "South Sudan", 
        "code": "SS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Spain", 
        "code": "ES", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Sri Lanka", 
        "code": "LK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Sudan", 
        "code": "SD", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Suriname", 
        "code": "SR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Svalbard and Jan Mayen", 
        "code": "SJ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Sweden", 
        "code": "SE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Switzerland", 
        "code": "CH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Syria", 
        "code": "SY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "São Tomé and Príncipe", 
        "code": "ST", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Taiwan", 
        "code": "TW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Tajikistan", 
        "code": "TJ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Tanzania", 
        "code": "TZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Thailand", 
        "code": "TH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "The Bahamas", 
        "code": "BS", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "The Gambia", 
        "code": "GM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Timor-Leste", 
        "code": "TL", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Togo", 
        "code": "TG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Tokelau", 
        "code": "TK", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Tonga", 
        "code": "TO", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Trinidad and Tobago", 
        "code": "TT", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Tunisia", 
        "code": "TN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Turkmenistan", 
        "code": "TM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Turks and Caicos Islands", 
        "code": "TC", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": true,
            "locality": false,
        }
    },
    {
        "name": "Tuvalu", 
        "code": "TV", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Türkiye", 
        "code": "TR", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "U.S. Virgin Islands", 
        "code": "VI", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Uganda", 
        "code": "UG", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Ukraine", 
        "code": "UA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "United Arab Emirates", 
        "code": "AE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "United Kingdom", 
        "code": "GB", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": true,
        }
    },
    {
        "name": "United States", 
        "code": "US", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": true,
            "locality": true,
        }
    },
    {
        "name": "United States Minor Outlying Islands", 
        "code": "UM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Uruguay", 
        "code": "UY", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Uzbekistan", 
        "code": "UZ", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Vanuatu", 
        "code": "VU", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Vatican City", 
        "code": "VA", 
        "feature": {
            "country": true,
            "administrative_area_level_1": false,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Venezuela", 
        "code": "VE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": true,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Vietnam", 
        "code": "VN", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Wallis and Futuna", 
        "code": "WF", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Western Sahara", 
        "code": "EH", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Yemen", 
        "code": "YE", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Zambia", 
        "code": "ZM", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Zimbabwe", 
        "code": "ZW", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
    {
        "name": "Åland Islands", 
        "code": "AX", 
        "feature": {
            "country": true,
            "administrative_area_level_1": true,
            "administrative_area_level_2": false,
            "postal_code": false,
            "locality": false,
        }
    },
]

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;
export { };

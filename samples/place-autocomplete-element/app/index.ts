/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

async function initMap(): Promise<void> {
    // Request needed libraries.
    //@ts-ignore
    const [{ Map }] = await Promise.all([
        google.maps.importLibrary("places"),
    ]);
    // Create the input HTML element, and append it.
    const input = document.createElement('input');
    const pac = new google.maps.places.PlaceAutocompleteElement({ inputElement: input });
    document.body.appendChild(pac.element as HTMLElement);

    // Inject HTML UI.
    const selectedPlaceTitle = document.createElement('p');
    selectedPlaceTitle.textContent = '';
    document.body.appendChild(selectedPlaceTitle);

    const selectedPlaceInfo = document.createElement('pre');
    selectedPlaceInfo.textContent = '';
    document.body.appendChild(selectedPlaceInfo);

    // Add the gmp-placeselect listener, and display the results.
    pac.addListener('gmp-placeselect', async ({ place }) => {
        await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] });

        selectedPlaceTitle.textContent = 'Selected Place:';
        selectedPlaceInfo.textContent = JSON.stringify(
            place.toJSON(), /* replacer */ null, /* space */ 2);
    });
}

initMap();
export { };
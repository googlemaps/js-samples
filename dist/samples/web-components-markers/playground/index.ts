// This example adds a map with markers, using web components.
async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    "maps",
  )) as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    "marker",
  )) as google.maps.MarkerLibrary;

  console.log("Maps JavaScript API loaded.");
}

initMap();
export {};

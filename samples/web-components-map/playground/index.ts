// This example adds a map using web components.
async function initMap(): Promise<void> {
  const { Map } = (await google.maps.importLibrary(
    "maps",
  )) as google.maps.MapsLibrary;
  console.log("Maps JavaScript API loaded.");
}

initMap();
export {};

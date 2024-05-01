// This example adds a map using web components.
async function initMap(): Promise<void> {
  console.log("Maps JavaScript API loaded.");
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

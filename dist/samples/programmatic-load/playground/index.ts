import { Loader } from "@googlemaps/js-api-loader";

let map: google.maps.Map;

const additionalOptions = {};
const loader = new Loader({
  apiKey: process.env.GOOGLE_MAPS_API_KEY!,
  version: "weekly",
  ...additionalOptions,
});

loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
export {};

const _ = require("lodash");

const data = {
  ..._.pick(
    {
      GOOGLE_MAPS_API_KEY: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
      ...process.env,
    },
    ["GOOGLE_MAPS_API_KEY"]
  ),
  libraries: [],
  version: "weekly",
  mode: ["jsfiddle", "docs", "app", "playground"],
  availableTypings: [
    "@types/google.maps",
    "@types/geojson",
    "@types/google.visualization",
  ],
  devDependencies: ["@types/google.maps", "parcel"],
  dependencies: [],
  scripts: {
    start: "parcel index.html --open",
    build: "parcel build index.html --no-optimize --public-url ./",
  },
};

module.exports = data;

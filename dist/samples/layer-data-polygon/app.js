(function(exports) {
  "use strict";

  // This example uses the Google Maps JavaScript API's Data layer
  // to create a rectangular polygon with 2 holes in it.
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: {
        lat: -33.872,
        lng: 151.252
      }
    }); // Define the LatLng coordinates for the outer path.

    var outerCoords = [
      {
        lat: -32.364,
        lng: 153.207
      }, // north west
      {
        lat: -35.364,
        lng: 153.207
      }, // south west
      {
        lat: -35.364,
        lng: 158.207
      }, // south east
      {
        lat: -32.364,
        lng: 158.207
      } // north east
    ]; // Define the LatLng coordinates for an inner path.

    var innerCoords1 = [
      {
        lat: -33.364,
        lng: 154.207
      },
      {
        lat: -34.364,
        lng: 154.207
      },
      {
        lat: -34.364,
        lng: 155.207
      },
      {
        lat: -33.364,
        lng: 155.207
      }
    ]; // Define the LatLng coordinates for another inner path.

    var innerCoords2 = [
      {
        lat: -33.364,
        lng: 156.207
      },
      {
        lat: -34.364,
        lng: 156.207
      },
      {
        lat: -34.364,
        lng: 157.207
      },
      {
        lat: -33.364,
        lng: 157.207
      }
    ];
    map.data.add({
      geometry: new google.maps.Data.Polygon([
        outerCoords,
        innerCoords1,
        innerCoords2
      ])
    });
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

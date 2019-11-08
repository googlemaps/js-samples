// [START script-body]
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: -28, lng: 137}
        });

        // [START snippet-load]
        // Load GeoJSON.
        map.data.loadGeoJson(
            'https://storage.googleapis.com/mapsdevsite/json/google.json');
        // [END snippet-load]

        // [START snippet-style]
        // Set the stroke width, and fill color for each polygon
        map.data.setStyle({
          fillColor: 'green',
          strokeWeight: 1
        });
        // [END snippet-style]
      }
// [END script-body]

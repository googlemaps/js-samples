// [START script-body]
      // This example adds a user-editable rectangle to the map.
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.5452, lng: -78.5389},
          zoom: 9
        });

      // [START region_rectangle]
        var bounds = {
          north: 44.599,
          south: 44.490,
          east: -78.443,
          west: -78.649
        };

        // Define a rectangle and set its editable property to true.
        var rectangle = new google.maps.Rectangle({
          bounds: bounds,
          editable: true
        });
      // [END region_rectangle]
        rectangle.setMap(map);
      }
// [END script-body]

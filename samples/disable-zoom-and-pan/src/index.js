// [START script-body]
// [START script-snippet]
      function initMap() {
        var locationRio = {lat: -22.915, lng: -43.197};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: locationRio,
          gestureHandling: 'none',
          zoomControl: false
        });
      // [END script-snippet]
        var marker = new google.maps.Marker({
          position: locationRio,
          map: map,
          title: 'Hello World!'
        });
      }
// [END script-body]


// [START script-body]
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: 49.496675, lng: -102.65625}
        });

        var georssLayer = new google.maps.KmlLayer({
          url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss'
        });
        georssLayer.setMap(map);
      }
// [END script-body]

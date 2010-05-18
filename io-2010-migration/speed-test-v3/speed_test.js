/**
 * @fileoverview This demo is used for MarkerClusterer. It will show 100 markers
 * using MarkerClusterer and count the time to show the difference between using
 * MarkerClusterer and without MarkerClusterer.
 * @author Luke Mahe (v2 author: Xiaoxi Wu)
 */

function $(element) {
  return document.getElementById(element);
}

var speedTest = {};

speedTest.count = 0;
speedTest.pics = null;
speedTest.map = null;
speedTest.markerClusterer = null;
speedTest.markers = [];
speedTest.infoWindow = null;

speedTest.init = function() {
  // Cache initial marker image
  var imageUrl = 'http://chart.apis.google.com/chart?cht=mm&chs=24x32&chco=' +
      'FFFFFF,008CFF,000000&ext=.png';
  var markerImage = new google.maps.MarkerImage(imageUrl,
      new google.maps.Size(24, 32));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(0, 0),
    icon: markerImage
  });
  
  // Register listeners for marker count links
  var markerInputNode = document.getElementById('control-input');
  var markerCountNodes = markerInputNode.getElementsByTagName('a');
  for (var n = 0, node; node = markerCountNodes[n]; n++) {
    google.maps.event.addDomListener(node, 'click', (function(cnt) {
      return function() {
        speedTest.clear();
        window.setTimeout(function() {
          speedTest.showMarkers(cnt);
        }, 0);
      };
    })(parseInt(node.innerHTML, 10)));
  }

  var options = {
    zoom: 2,
    center: new google.maps.LatLng(39.91, 116.38),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  speedTest.map = new google.maps.Map($('map'), options);
  speedTest.infoWindow = new google.maps.InfoWindow();
  speedTest.pics = data.photos;
  
  var useGmm = document.getElementById('usegmm');
  google.maps.event.addDomListener(useGmm, 'click', speedTest.change);
};

speedTest.showMarkers = function(numMarkers) {
  $('num-markers').innerHTML = numMarkers;
  if (speedTest.markerClusterer) {
    speedTest.markerClusterer.clearMarkers();
  }
  
  // Start timer
  var start = new Date();
  $('time-create').innerHTML = "timing...";
  
  speedTest.markers = [];
  for (var i = 0; i < numMarkers; i++) {
    var latLng = new google.maps.LatLng(
        speedTest.pics[i].latitude,
        speedTest.pics[i].longitude);
    var marker = new google.maps.Marker({
      position: latLng
    });

    google.maps.event.addListener(marker,
        'click',
        speedTest.markerClickFunction(speedTest.pics[i], marker));
    speedTest.markers.push(marker);
  }
  
  // End timer
  var end = new Date();
  $('time-create').innerHTML = end - start;
  
  // Start adding markers onto the map.
  window.setTimeout(speedTest.time, 0);
};

speedTest.markerClickFunction = function(pic, marker) {
  return function(e) {
    e.preventDefault();
    var html = [
      '<div class="info">',
      '<h3>',
      pic.photo_title,
      '</h3>',
      '<div class="info-body">',
      '<a href="' + pic.photo_url + '" target="_blank">',
      '<img class="info-img" src="' + pic.photo_file_url + '"/>',
      '</a>',
      '</div>',
      '<a href="http://www.panoramio.com" target="_blank">',
      '<img ',
      'src="http://maps.google.com/intl/en_ALL/mapfiles/iw_panoramio.png"/>',
      '</a>',
      '<div>',
      '<a href="' + pic.owner_url + '" target="_blank">',
      pic.owner_name,
      '</a>',
      '</div>',
      '</div>'
    ].join('');
    speedTest.infoWindow.setContent(html);
    speedTest.infoWindow.open(speedTest.map, marker);
  };
};

speedTest.clear = function() {
  $('time-create').innerHTML = $('time-add').innerHTML = 'cleaning...';
  for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
    marker.setMap(null);
  }
  $('time-create').innerHTML =
  $('time-add').innerHTML =
  $('num-markers').innerHTML = 0;
};

speedTest.change = function() {
  speedTest.clear();
};

speedTest.time = function() {
  speedTest.count = 0;
  var start = new Date();
  $('time-add').innerHTML = 'timing...';
  
  if ($('usegmm').checked) {
    speedTest.markerClusterer = new MarkerClusterer(
      speedTest.map, speedTest.markers);
    var end = new Date();
    $('time-add').innerHTML = end - start;
  } else {
    for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
      google.maps.event.addListener(marker, 'visible_changed', (function(k) {
        return function() {
          speedTest.count++;
          if (speedTest.count == speedTest.markers.length - 1) {
            var end = new Date();
            $('time-add').innerHTML = end - start;
          }
        };
      })(i));
      
      marker.setMap(speedTest.map);
    }
  }
};



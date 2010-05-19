/**
 * @fileoverview This demo is used for MarkerClusterer. It will show 100 markers
 * using MarkerClusterer and count the time to show the difference between using
 * MarkerClusterer and without MarkerClusterer.
 * @author Xiaoxi Wu
 */
 
function $(element) {
  return document.getElementById(element);
}

var AMC = {};

AMC.count = 0;
AMC.map = null;
AMC.pics = null;
AMC.markerClusterer = null;
AMC.markers = [];

AMC.init = function() {
  if(GBrowserIsCompatible()) {
    AMC.map = new GMap2($('map'));
    AMC.map.setUIToDefault();
    AMC.map.setCenter(new GLatLng(39.91, 116.38), 2);
    AMC.pics = data.photos;
   
    // Register listeners for marker count links
    var markerInputNode = document.getElementById('control-input');
    var markerCountNodes = markerInputNode.getElementsByTagName('a');
    for (var n = 0, node; node = markerCountNodes[n]; n++) {
      GEvent.addDomListener(node, 'click', (function(cnt) {
        return function() {
          AMC.clear();
          window.setTimeout(function() {
            AMC.showMarkers(cnt);
          }, 0);
        };
      })(parseInt(node.innerHTML, 10)));
    }
  }
};

AMC.showMarkers = function(numMarkers) {
  $('num-markers').innerHTML = numMarkers;
  if(AMC.markerClusterer) {
   AMC.markerClusterer.clearMarkers();
  }
  
  // Start timer
  var start = new Date();
  $('time-create').innerHTML = "timing...";
  
  AMC.markers = [];
  for (var i = 0; i < numMarkers; i++) {
    var latlng = new GLatLng(AMC.pics[i].latitude, AMC.pics[i].longitude);
    var marker = new GMarker(latlng);
    var fn = markerClickFn(AMC.pics[i], latlng);
    GEvent.addListener(marker, "click", markerClickFn(AMC.pics[i], latlng));
    AMC.markers.push(marker);
  }
  
  // End timer
  var end = new Date();
  $('time-create').innerHTML = end - start;
  
  // Start adding markers onto the map.
  window.setTimeout(AMC.timing, 0);
};

AMC.changeType = function() {
  AMC.clear();
};

AMC.clear = function() {
  $('time-create').innerHTML = $('time-add').innerHTML = 'cleaning...';
  AMC.map.clearOverlays();
  $('time-create').innerHTML =
  $('time-add').innerHTML =
  $('num-markers').innerHTML = 0;
};

AMC.timing = function() {
  AMC.count = 0;
  var start = new Date();
  $('time-add').innerHTML = "timing...";
  
  if ($("usegmm").checked) {
    AMC.markerClusterer = new MarkerClusterer(AMC.map, AMC.markers);
    var end = new Date();
    $('time-add').innerHTML = end - start;
  } else {
    // Temporarily add map listener to detect overlays being added.  
    GEvent.addListener(AMC.map, 'addoverlay', function(overlay) {
      AMC.count++;
      if (AMC.count == AMC.markers.length - 1) {
        var end = new Date();
        $('time-add').innerHTML = end - start;
        GEvent.clearListeners(AMC.map, 'addoverlay');
      }
    });
  
    for (var i = 0, marker; marker = AMC.markers[i]; i++) {
      AMC.map.addOverlay(marker);
    }
  }
};


function markerClickFn(pic, latlng) {
  return function() {
    var infoHtml = [
      '<div class="info">',
      '<h3>',
      pic.photo_title,
      '</h3>',
      '<div class="info-body">',
      '<a href="' + pic.photo_url + '" target="_blank">',
      '<img class="info-img" src="' + pic.photo_file_url + '"/>',
      '</a>',
      '</div>',
      '<a href="http://www.panoramio.com/" target="_blank">',
      '<img ',
      'src="http://maps.google.com/intl/en_ALL/mapfiles/iw_panoramio.png"/>',
      '</a>',
      '<br/>',
      '<a href="' + pic.owner_url + '" target="_blank">',
      pic.owner_name,
      '</a>',
      '</div>',
      '</div>'
    ].join('');
    AMC.map.openInfoWindowHtml(latlng, infoHtml);
  };
}

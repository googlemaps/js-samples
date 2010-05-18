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
    AMC.map.setCenter(new GLatLng(39.91, 116.38), 2);
    AMC.map.addControl(new GLargeMapControl());
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
  $("time-add").innerHTML = "timing...";
  
  if ($("usegmm").checked) {
    AMC.markerClusterer = new MarkerClusterer(map, AMC.markers);
    var end = new Date();
    $('time-add').innerHTML = end - start;
  } else {
    
  console.debug('length = ' + AMC.markers.length);
  
    // Temporarily add map listener to detect overlays being added.  
    GEvent.addListener(AMC.map, 'addoverlay', function(overlay) {
      AMC.count++;
      if (AMC.count == AMC.markers.length - 1) {
        console.debug(AMC.count);
        
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
    var title = pic.photo_title;
    var url = pic.photo_url;
    var fileurl = pic.photo_file_url;
    var infoHtml = '<div style="width:210px;"><h3>' + title
     + '</h3><div style="width:200px;height:200px;line-height:200px;margin:2px 0;text-align:center;">'
     + '<a id="infoimg" href="' + url + '" target="_blank">Loading...</a></div>'
     + '<a href="http://www.panoramio.com/" target="_blank">'
     + '<img src="http://maps.google.com/intl/en_ALL/mapfiles/iw_panoramio.png"></img></a><br/>'
     + '<a href="' + pic.owner_url + '" target="_blank">' + pic.owner_name + '</a>';
    var img = document.createElement("img");
    GEvent.addDomListener(img, "load", function() {
                           if ($("infoimg") == null) {
                             return;
                           }
                           img = adjustImage(img, 200, 200);
                           img.style.cssText = "vertical-align:middle;padding:1px;border:1px solid #EAEAEA;";
                           $("infoimg").innerHTML = "";
                           $("infoimg").appendChild(img);
                         });
    img.src = fileurl;
    if(img.readyState == "complete" || img.readyState == "loaded") {
     img = adjustImage(img, 280, 200);
     infoHtml += '<img width=' + img.width + ' height=' + img.height
       + ' style="vertical-align:middle;padding:1px;border:1px solid #aAaAaA"></img>';
    }
    infoHtml += '</div></div>';
    AMC.map.openInfoWindowHtml(latlng, infoHtml);
  };
}

function adjustImage(img, maxwidth, maxheight) {
  var wid = img.width;
  var hei = img.height;
  var newwid = wid;
  var newhei = hei;
  if(wid / maxwidth > hei / maxheight){
   if(wid > maxwidth){
     newwid = maxwidth;
     newhei = parseInt(hei * newwid / wid);
   }
  } else {
   if(hei > maxheight) {
     newhei = maxheight;
     newwid = parseInt(wid * newhei / hei);
   }
  }
  var src = img.src;
  img = document.createElement("img");
  img.src = src;
  img.width = newwid;
  img.height = newhei;
  return img;
}

window.AMC = AMC || window.AMC;

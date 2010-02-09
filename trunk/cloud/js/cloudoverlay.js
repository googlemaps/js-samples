/**
 * Cloud+sparkles custom overlay.
 */
CloudOverlay.prototype = new google.maps.OverlayView();

/**
 * Object for holding cloud info.
 * @constructor
 */
function Cloud() {
  this.radius;
  this.div;
  this.canvas;
  this.stars = [];
}


/**
 * Cloud overlay.
 * @constructor
 * @param {Array} markers Initial array of markers.
 * @param {Map} map Map to put overlay on.
 */
function CloudOverlay(markers, map) {
  this.markers_ = markers || [];

  this.numClouds_ = 8;
  this.clouds_ = [];
  this.setupClouds_();

  this.map_ = map;
  this.setMap(this.map_);
}

/**
 * Create cloud objects
 * @private
 */
CloudOverlay.prototype.setupClouds_ = function() {
  for (var i = 0; i < this.numClouds_; i++) {
    var cloud = new Cloud();
    this.clouds_.push(cloud);
  }
};

/**
 * Set new array of markers, redraw overlay.
 * @param {Array} markers New array of markers.
 */
CloudOverlay.prototype.setMarkers = function(markers) {
  this.markers_ = markers;
  this.draw();
};


/**
 * Create initial divs and canvases for clouds.
 * Called when cloud overlay is added to map initially.
 */
CloudOverlay.prototype.onAdd = function() {
  var me = this;
  var panes = this.getPanes();
  for (var i = 0; i < this.numClouds_; i++) {
    var div = document.createElement('DIV');
    div.style.border = '0px solid';
    div.style.position = 'absolute';
    div.style.overflow = 'visible';
    this.clouds_[i].div = div;
    panes.overlayImage.appendChild(div);

    var canvas = Raphael(div, 100, 100);
    this.clouds_[i].canvas = canvas;
  }
  this.starsTimer_ = window.setInterval(function() { me.animateStars();}, 2000);
};

/**
 * Draws cloud overlay - cloudy part.
 */
CloudOverlay.prototype.draw = function() {
  if (!this.getProjection()) {
    return;
  }
  var overlayProjection = this.getProjection();
  for (var i = 0; i < this.markers_.length; i++) {
    if (this.markers_[i]) {
      var cloud = this.clouds_[i];
      var latlng = this.markers_[i].getPosition();
      var div = cloud.div;

      var radius = 170 - (this.markers_.length - i) * 20;
      var center = overlayProjection.fromLatLngToDivPixel(latlng);
      var left = center.x - radius / 2;
      var top = center.y - radius / 2;
      div.style.left = left + 'px';
      div.style.top = top + 'px';
      div.style.width = radius + 'px';
      div.style.height = radius + 'px';
      cloud.canvas.setSize(radius, radius);
      cloud.radius = radius;
      if (cloud.circle) {
        cloud.circle.remove();
      }
      cloud.circle = cloud.canvas.circle(radius / 2, radius / 2, radius / 2)
      cloud.circle.attr({stroke: 'none', fill: 'r(.5,.5)#fff-#fff', opacity: 0.0});
      for (var j = 0; j < cloud.stars.length; j++) {
        cloud.stars[j].remove();
      }
    }
  }
  this.animateStars();
};

/**
 * Generates animated stars for current location.
 */
CloudOverlay.prototype.animateStars = function() {
  var me = this;
  var currentNum = this.markers_.length - 1;
  var cloud = this.clouds_[currentNum];
  var canvas = cloud.canvas;
  var numStars = Math.floor(cloud.radius / 40);
  cloud.stars = [];
  for (var j = 0; j < numStars; j++) {
    window.setTimeout(function() {
       if ((me.markers_.length - 1) == currentNum) {
         var randX = Math.floor(Math.random() * (cloud.radius - 80));
         var randY = Math.floor(Math.random() * (cloud.radius - 80));
         var star = canvas.g.star(randX + 40, randY + 40, 8);
         star.attr({stroke: 'none', fill: '90-#fff-#fff'});
         star.animate({scale: '0.25 0.25', rotation: 180, opacity: 0},
             500 + 2000 * Math.random(), function() {this.remove();});
         cloud.stars.push(star);
       }
     }, j * 300);
  }
};

/**
 * Called when overlay is removed from map.
 * Removes references to objects.
 */
CloudOverlay.prototype.onRemove = function() {
  for (var i = 0; i < this.markers_.length; i++) {
    var cloud = this.clouds_[i];
    // Check if cloud exists before continuing
    if (!cloud) {
      continue;
    }
    // Remove cloud circle
    // Should exist by the time it's removed from the map,
    // but on the safe side, check for existence.
    // Edge case: Someone loading map 2 seconds before the flight ends.
    if (cloud.circle) {
      cloud.circle.remove();
      cloud.circle = null;
    }
    // Remove stars
    for (var j = 0; j < cloud.stars.length; j++) {
      if (cloud.stars[j]) {
        cloud.stars[j].remove();
        cloud.stars[j] = null;
      }
    }
  }
  // Stop the timer that creates stars.
  window.clearInterval(this.starsTimer_);
};

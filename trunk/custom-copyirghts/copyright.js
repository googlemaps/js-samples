/**
 * @name Copyright and CopyrightCollection classes for Google Maps JS API v3.
 * @author Jennifer Chye
 * @fileoverview
 * This library contains classes for working with copyrights for custom map
 * types.
 * <br/>
 * This is a v3 implementation of the <a href="http://code.google.com/apis/maps/documentation/javascript/v2/reference.html#GCopyright">GCopyright</a>
 * and <a href="http://code.google.com/apis/maps/documentation/javascript/v2/reference.html#GCopyrightCollection">GCopyrightCollection</a>
 * classes in v2 of the Maps API.
 */

/**
 * A copyright is defined by the highest zoom level at which it should be
 * shown, the lat/lng bounds of the content it relates to, and the text
 * associated with the copyright.
 *
 * @param {string} id  Unique id.
 * @param {google.maps.LatLngBounds} bounds  Bounds to which this copyright
 *     applies.
 * @param {number} minZoom  Minimum zoom at which to display.
 * @param {string} text  Copyright text.
 * @constructor
 */
function Copyright(id, bounds, minZoom, text) {
  this.id = id;
  this.bounds = bounds;
  this.minZoom = minZoom;
  this.text = text;
}

/**
 * Creates a copyright collection for a single map type/spec.
 *
 * @param {string} opt_prefix  Prefix for copyrights (optional).
 * @constructor
 */
function CopyrightCollection(opt_prefix) {
  this.zoomLevels_ = [];
  this.copyrights_ = {};
  this.prefix_ = opt_prefix || '';
}

/**
 * Adds the given copyright to the collection, returning true if the copyright
 * was new and was added or false if the copyright was a duplicate and ignored.
 *
 * @param {Copyright} copyright  New copyright to add.
 */
CopyrightCollection.prototype.addCopyright = function(copyright) {
  if (this.copyrights_[copyright.id]) {
    return false;
  }

  // Add enough zoom levels to accomodate this copyright.
  var zoomLevels = this.zoomLevels_;
  var zoom = copyright.minZoom;
  while (zoomLevels.length <= zoom) {
    zoomLevels.push([]);
  }
  this.copyrights_[copyright.id] = 1;
  zoomLevels[zoom].push(copyright);
  return true;
};

/**
 * Returns an array of copyrights we have available for a given point.
 * @param {google.maps.LatLng} point  The point for which we want to get
 *     copyrights.
 * @return {Array.<Copyright>} Resulting array of copyrights.
 */
CopyrightCollection.prototype.getCopyrightsAtPoint = function(point) {
  var ret = [];
  var zoomLevels = this.zoomLevels_;
  for (var i = 0; i < zoomLevels.length; i++) {
    for (var j = 0; j < zoomLevels[i].length; j++) {
      var copyright = zoomLevels[i][j];
      if (copyright.bounds.contains(point)) {
        ret.push(copyright);
      }
    }
  }
  return ret;
};

/**
 * Returns an array of the copyrights we should display for the given viewport.
 *
 * @param {google.maps.LatLngBounds} bounds  Query bounds.
 * @param {number} zoom  Zoom level.
 * @return {Array.<string>} Resulting array of copyright strings.
 */
CopyrightCollection.prototype.getCopyrights = function(bounds, zoom) {
  var seenCopyrights = {};
  var copyrights = [];

  // We start iterating from the given zoom level, which skips all copyrights
  // that are only displayed at higher zoom levels.
  var zoomLevels = this.zoomLevels_;
  for (var i = Math.min(zoom, zoomLevels.length - 1); i >= 0; i--) {
    var copyrightList = zoomLevels[i];
    for (var j = 0; j < copyrightList.length; j++) {
      var copyright = copyrightList[j];
      var text = copyright.text;
      // Don't include duplicate copyrights.
      if (copyright.bounds.intersects(bounds) && !seenCopyrights[text]) {
        copyrights.push(text);
        seenCopyrights[text] = 1;
      }
    }
  }

  return copyrights;
};

/**
 * Returns a string containing the prefix and copyright texts for this bounds.
 *
 * @param {google.maps.LatLngBounds} bounds  Query bounds.
 * @param {number} zoom  Zoom level.
 * @return {string} Resulting Copyright notice, or an empty string if there were
 *     no copyright notices in the provided bounds.
 */
CopyrightCollection.prototype.getCopyrightNotice = function(bounds, zoom) {
  var copyrights = this.getCopyrights(bounds, zoom);
  return copyrights.length ? this.prefix_ + ' ' + copyrights.join(', ') : '';
};
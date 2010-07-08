// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url
// ==/ClosureCompiler==

/**
 * A RichMarker that allows any HTML/DOM to be added to a map and be draggable.
 *
 * @param {Object.<string, *>=} opt_options Optional properties to set.
 * @extends {google.maps.OverlayView}
 * @constructor
 */
function RichMarker(opt_options) {
  this.set('visible', true);

  var options = opt_options || {};
  this.map_ = options['map'];

  this.setValues(options);

  if (!this.get('shadow')) {
    this.set('shadow', '7px -3px 5px rgba(88, 88, 88, 0.7)');
  }
}
RichMarker.prototype = new google.maps.OverlayView();
window['RichMarker'] = RichMarker;


/**
 * map property changed callback.
 */
RichMarker.prototype.map_changed = function() {
  var map = this.get('map');
  if (map === this.map_) {
    return;
  }

  this.map_ = map;

  if (!map || map == null) {
    this.onRemove();
  } else {
    var that = this;
    window.setTimeout(function() {
      that.onRemove();
      that.onAdd();
    }, 0);
  }
};
RichMarker.prototype['map_changed'] = RichMarker.prototype.map_changed;


/**
 * draggable property changed callback.
 */
RichMarker.prototype.draggable_changed = function() {
  if (this.get('ready')) {
    if (this.get('draggable')) {
      this.addDragging_(this.markerWrapper_);
    } else {
      this.removeDragListeners_();
    }
  }
};
RichMarker.prototype['draggable_changed'] = RichMarker.prototype.draggable_changed;


/**
 * Returns the current visibility state of the marker.
 *
 * @return {boolean} The visiblity of the marker.
 */
RichMarker.prototype.getVisible = function() {
  return /** @type {boolean} */ (this.get('visible'));
};
RichMarker.prototype['getVisible'] = RichMarker.prototype.getVisible;


/**
 * Sets the visiblility state of the marker.
 *
 * @param {boolean} visible The visiblilty of the marker.
 */
RichMarker.prototype.setVisible = function(visible) {
  this.set('visible', !!visible);
};
RichMarker.prototype['setVisible'] = RichMarker.prototype.setVisible;


/**
 *  The visible changed event
 */
RichMarker.prototype.visible_changed = function() {
  if (this.get('ready')) {
    this.markerWrapper_.style.display = this.get('visible') ? '' : 'none';
    this.draw();
  }
};
RichMarker.prototype['visible_changed'] = RichMarker.prototype.visible_changed;


/**
 * Sets the marker to be flat
 *
 * @param {boolean} flat If the marker is to be flat or not.
 */
RichMarker.prototype.setFlat = function(flat) {
  this.set('flat', !!flat);
};
RichMarker.prototype['setFlat'] = RichMarker.prototype.setFlat;


/**
 * If the makrer is flat or not.
 *
 * @return {boolean} True the marker is flat.
 */
RichMarker.prototype.getFlat = function() {
  return /** @type {boolean} */ (this.get('flat'));
};
RichMarker.prototype['getFlat'] = RichMarker.prototype.getFlat;


/**
 * Flat changed event
 */
RichMarker.prototype.flat_changed = function() {
  if (!this.get('ready')) {
    return;
  }

  if (this.get('flat')) {
    this.markerWrapper_.style['boxShadow'] =
        this.markerWrapper_.style['webkitBoxShadow'] =
        this.markerWrapper_.style['MozBoxShadow'] = '';
  } else {
    var boxShadow = this.get('shadow');
    this.markerWrapper_.style['boxShadow'] =
        this.markerWrapper_.style['webkitBoxShadow'] =
        this.markerWrapper_.style['MozBoxShadow'] = boxShadow;
  }
};
RichMarker.prototype['flat_changed'] = RichMarker.prototype.flat_changed;


/**
 * Sets the zIndex of the marker.
 *
 * @param {Number} index The index to set.
 */
RichMarker.prototype.setZIndex = function(index) {
  this.set('zIndex', index);
};
RichMarker.prototype['setZIndex'] = RichMarker.prototype.setZIndex;


/**
 * Gets the zIndex of the marker.
 *
 * @return {Number} The zIndex of the marker.
 */
RichMarker.prototype.getZIndex = function() {
  return /** @type {Number} */ (this.get('zIndex'));
};
RichMarker.prototype['getZIndex'] = RichMarker.prototype.getzIndex;


/**
 * zIndex changed event.
 */
RichMarker.prototype.zIndex_changed = function() {
  if (this.get('zIndex') && this.markerWrapper_) {
    this.markerWrapper_.style.zIndex = this.get('zIndex');
  }
};
RichMarker.prototype['zIndex_changed'] = RichMarker.prototype.zIndex_changed;

/**
 * Whether the marker is draggable or not
 *
 * @return {boolean} True if the marker is draggable.
 */
RichMarker.prototype.getDraggable = function() {
  return /** @type {boolean} */ (this.get('draggable'));
};
RichMarker.prototype['getDraggable'] = RichMarker.prototype.getDraggable;


/**
 * Sets the marker to be draggable or not
 *
 * @param {boolean} draggable If the marker is draggable or not.
 */
RichMarker.prototype.setDraggable = function(draggable) {
  this.set('draggable', !!draggable);
};
RichMarker.prototype['setDraggable'] = RichMarker.prototype.setDraggable;


/**
 * Gets the postiton of the marker
 *
 * @return {google.maps.LatLng} The position of the marker.
 */
RichMarker.prototype.getPosition = function() {
  return /** @type {google.maps.LatLng} */ (this.get('position'));
};
RichMarker.prototype['getPosition'] = RichMarker.prototype.getPosition;


/**
 * Sets the position of the marker
 *
 * @param {google.maps.LatLng} position The position to set.
 */
RichMarker.prototype.setPosition = function(position) {
  this.set('position', position);
};
RichMarker.prototype['setPosition'] = RichMarker.prototype.setPosition;


/**
 * Position changed event.
 */
RichMarker.prototype.position_changed = function() {
  this.draw();
};
RichMarker.prototype['position_changed'] = RichMarker.prototype.position_changed;


/**
 * Gets the anchor
 *
 * @return {google.maps.Size} The position of the anchor.
 */
RichMarker.prototype.getAnchor = function() {
  return /** @type {google.maps.Size} */ (this.get('anchor'));
};
RichMarker.prototype['getAnchor'] = RichMarker.prototype.getAnchor;


/**
 * Sets the anchor
 *
 * @param {RichMarkerPosition|google.maps.Size} anchor The anchor to set.
 */
RichMarker.prototype.setAnchor = function(anchor) {
  this.set('anchor', anchor);
};
RichMarker.prototype['setAnchor'] = RichMarker.prototype.setAnchor;


/**
 * Anchor changed event
 */
RichMarker.prototype.anchor_changed = function() {
  this.draw();
};
RichMarker.prototype['anchor_changed'] = RichMarker.prototype.anchor_changed;


/**
 * Converts a html string to a document fragment
 *
 * @param {string} htmlString The html string to convert.
 * @return {Node} A html document fragment.
 * @private
 */
RichMarker.prototype.htmlToDocumentFragment_ = function(htmlString) {
  var tempDiv = document.createElement('DIV');
  tempDiv.innerHTML = htmlString;
  if (tempDiv.childNodes.length == 1) {
    return /** @type {!Node} */ (tempDiv.removeChild(tempDiv.firstChild));
  } else {
    var fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }
    return fragment;
  }
};


/**
 * Removes all children from the node
 *
 * @param {Node} node The node to remove all children from.
 * @private
 */
RichMarker.prototype.removeChildren_ = function(node) {
  if (!node) {
    return;
  }

  var child;
  while (child = node.firstChild) {
    node.removeChild(child);
  }
};


/**
 * Sets the contetn of the marker.
 *
 * @param {string|Node} content The content to set.
 */
RichMarker.prototype.setContent = function(content) {
  this.set('content', content);
  this.setContent_();

  if (this.get('ready')) {
    this.draw();
  }
};
RichMarker.prototype['setContent'] = RichMarker.prototype.setContent;


/**
 * Get the content of the marker.
 *
 * @return {string|Node} The marker content.
 */
RichMarker.prototype.getContent = function() {
  var content = this.get('content');

  if (typeof content == 'string') {
    return /** @type {string} */ (content);
  }

  return /** @type {Node} */ (this.get('content'));
};
RichMarker.prototype['getContent'] = RichMarker.prototype.getContent;


/**
 * Set the content of the marker.
 *
 * @private
 */
RichMarker.prototype.setContent_ = function() {
  if (!this.markerContent_) {
    // Marker content area doesnt exist.
    return;
  }

  this.removeChildren_(this.markerContent_);
  var content = this.get('content');
  if (content) {
    if (typeof content == 'string') {
      content = content.replace(/^\s*([\S\s]*)\b\s*$/, '$1');
      content = this.htmlToDocumentFragment_(content);
    }
    this.markerContent_.appendChild(content);

    var me = this;
    var images = this.markerContent_.getElementsByTagName('IMG');
    for (var i = 0, image; image = images[i]; i++) {
      google.maps.event.addDomListener(image, 'mousedown', function(e) {
        if (me.get('draggable')) {
          e.preventDefault();
        }
      });
      google.maps.event.addDomListener(image, 'load', function() {
        me.draw();
      });
    }

    google.maps.event.trigger(this, 'domready');
    this.draw();
  }
};

/**
 * Sets the cursor.
 *
 * @param {string} whichCursor What cursor to show.
 * @private
 */
RichMarker.prototype.setCursor_ = function(whichCursor) {
  var cursor = 'default';
  if (navigator.userAgent.indexOf('Gecko/') !== -1) {
    // Moz has some nice cursors :)
    if (whichCursor == 'dragging') {
      cursor = '-moz-grabbing';
    }

    if (whichCursor == 'dragready') {
      cursor = '-moz-grab';
    }

    if (whichCursor == 'draggable') {
      cursor = 'pointer';
    }
  } else {
    if (whichCursor == 'dragging' || whichCursor == 'dragready') {
      cursor = 'move';
    }

    if (whichCursor == 'draggable') {
      cursor = 'pointer';
    }
  }

  if (this.markerWrapper_.style.cursor != cursor) {
    this.markerWrapper_.style.cursor = cursor;
  }
};

/**
 * Start dragging.
 *
 * @param {google.maps.MouseEvent} e The event.
 */
RichMarker.prototype.startDrag = function(e) {
  if (!this.get('draggable')) {
    return;
  }

  if (!this.get('dragging')) {
    this.set('dragging', true);
    this.mapDraggable_ = this.get('map').get('draggable');
    this.get('map').set('draggable', false);

    var left = parseInt(this.markerWrapper_.style.left, 10);
    var top = parseInt(this.markerWrapper_.style.top, 10);

    var offsetLeft = this.get('map').getDiv().offsetLeft;
    var offsetTop = this.get('map').getDiv().offsetTop;

    this.dragDiffX_ = e.clientX - offsetLeft - left;
    this.dragDiffY_ = e.clientY - offsetTop - top;

    this.setCursor_('dragready');

    this.markerWrapper_.style.MozUserSelect = 'none';
    this.markerWrapper_.style.KhtmlUserSelect = 'none';
    this.markerWrapper_.unselectable = 'on';
    this.markerWrapper_.onselectstart = function() {
      return false;
    }

    google.maps.event.trigger(this, 'dragstart');
  }
};


/**
 * Stop dragging.
 */
RichMarker.prototype.stopDrag = function() {
  if (!this.get('draggable')) {
    return;
  }

  if (this.get('dragging')) {
    this.set('dragging', false);
    this.get('map').set('draggable', this.mapDraggable_);
    this.dragDiffX_ = null;
    this.dragDiffY_ = null;
    this.mapDraggable_ = null;

    var left = parseInt(this.markerWrapper_.style.left, 10);
    var top = parseInt(this.markerWrapper_.style.top, 10);

    this.markerWrapper_.style.left = left + 'px';
    this.markerWrapper_.style.top = top + 'px';

    this.markerWrapper_.style.cursor = '-moz-grab';
    this.markerWrapper_.style.MozUserSelect = '';
    this.markerWrapper_.style.KhtmlUserSelect = '';
    this.markerWrapper_.unselectable = 'off';
    this.markerWrapper_.onselectstart = function() {};

    google.maps.event.trigger(this, 'dragend');
    this.draw();

    this.setCursor_('draggable');
  }
};


/**
 * Handles the drag event.
 *
 * @param {google.maps.MouseEvent} e The event.
 */
RichMarker.prototype.drag = function(e) {
  if (!this.get('draggable') || !this.get('dragging')) {
    // This object isn't draggable or we have stopped dragging
    this.stopDrag();
    return;
  }

  var projection = this.getProjection();

  var offsetLeft = this.get('map').getDiv().offsetLeft;
  var offsetTop = this.get('map').getDiv().offsetTop;

  var containerPixel = projection.fromLatLngToContainerPixel(e.latLng);

  var x = containerPixel.x - this.dragDiffX_ - window.scrollX;
  var y = containerPixel.y - this.dragDiffY_ - window.scrollY;

  this.markerWrapper_.style.left = x + 'px';
  this.markerWrapper_.style.top = y + 'px';

  var point = new google.maps.Point(x, y);
  this.set('position', projection.fromDivPixelToLatLng(point));
  google.maps.event.trigger(this, 'drag');

  this.setCursor_('dragging');
};


/**
 * Removes the drag listeners associated with the marker.
 *
 * @private
 */
RichMarker.prototype.removeDragListeners_ = function() {
  if (this.dragListeners_) {
    for (var i = 0, listener; listener = this.dragListeners_[i]; i++) {
      google.maps.event.removeListener(listener);
    }
    this.dragListeners_.length = 0;
  }
  this.setCursor_('default');
};


/**
 * Add dragging to the marker.
 *
 * @param {Node} node The node to apply dragging to.
 * @private
 */
RichMarker.prototype.addDragging_ = function(node) {
  if (!node) {
    return;
  }
  var that = this;
  var map = this.get('map');
  this.dragListeners_ = [];

  this.dragListeners_.push(
    google.maps.event.addDomListener(node, 'mousedown', function(e) {
      that.startDrag(e);
    }),
    google.maps.event.addDomListener(node, 'mouseup', function() {
      that.stopDrag();
    }),
    google.maps.event.addListener(map, 'mousemove', function(e) {
      that.drag(e);
    }),
    google.maps.event.addDomListener(window, 'mouseup', function() {
      that.stopDrag();
    })
  );

  this.setCursor_('draggable');
};


/**
 * Adding the marker to a map.
 * Implementing the interface.
 */
RichMarker.prototype.onAdd = function() {
  if (!this.markerWrapper_) {
    this.markerWrapper_ = document.createElement('DIV');
    this.markerWrapper_.style.position = 'absolute';
  }

  this.addDragging_(this.markerWrapper_);

  if (this.get('zIndex')) {
    this.markerWrapper_.style.zIndex = this.get('zIndex');
  }

  var visible = this.get('visible');
  this.markerWrapper_.style.display = visible ? '' : 'none';

  if (!this.markerContent_) {
    this.markerContent_ = document.createElement('DIV');
    this.markerWrapper_.appendChild(this.markerContent_);

    var me = this;
    google.maps.event.addDomListener(this.markerContent_, 'click', function(e) {
      google.maps.event.trigger(me, 'click');
    });
  }

  this.set('ready', true);

  this.setContent_();
  this.flat_changed();

  var panes = this.getPanes();
  if (panes) {
    panes.overlayImage.appendChild(this.markerWrapper_);
  }
};
RichMarker.prototype['onAdd'] = RichMarker.prototype.onAdd;


/**
 * Get the anchor offset.
 *
 * @return {google.maps.Size} The size offset.
 * @private
 */
RichMarker.prototype.getOffset_ = function() {
  var anchor = this.get('anchor');
  if (typeof anchor == 'object') {
    return /** @type {google.maps.Size} */ (anchor);
  }

  var offset = new google.maps.Size(0, 0);
  if (!this.markerContent_) {
    return offset;
  }

  var width = this.markerContent_.offsetWidth;
  var height = this.markerContent_.offsetHeight;

  switch (anchor) {
   case RichMarkerPosition.TOP_LEFT:
     break;
   case RichMarkerPosition.TOP:
     offset.width = -width / 2;
     break;
   case RichMarkerPosition.TOP_RIGHT:
     offset.width = -width;
     break;
   case RichMarkerPosition.LEFT:
     offset.height = -height / 2;
     break;
   case RichMarkerPosition.MIDDLE:
     offset.width = -width / 2;
     offset.height = -height / 2;
     break;
   case RichMarkerPosition.RIGHT:
     offset.width = -width;
     offset.height = -height / 2;
     break;
   case RichMarkerPosition.BOTTOM_LEFT:
     offset.height = -height;
     break;
   case RichMarkerPosition.BOTTOM:
     offset.width = -width / 2;
     offset.height = -height;
     break;
   case RichMarkerPosition.BOTTOM_RIGHT:
     offset.width = -width;
     offset.height = -height;
     break;
  }

  return offset;
};


/**
 * Impelementing the interface.
 */
RichMarker.prototype.draw = function() {
  if (!this.get('ready') || this.get('dragging')) {
    return;
  }

  var projection = this.getProjection();
  var latLng = /** @type {google.maps.LatLng} */ (this.get('position'))
  var pos = projection.fromLatLngToDivPixel(latLng);

  this.markerWrapper_.style.top = pos.y + 'px';
  this.markerWrapper_.style.left = pos.x + 'px';

  var offset = this.getOffset_();
  this.markerWrapper_.style.marginTop = offset.height + 'px';
  this.markerWrapper_.style.marginLeft = offset.width + 'px';
};
RichMarker.prototype['draw'] = RichMarker.prototype.draw;


/**
 * Removing a marker from the page.
 * Implementing the interface.
 */
RichMarker.prototype.onRemove = function() {
  if (this.markerWrapper_ && this.markerWrapper_.parentNode) {
    this.markerWrapper_.parentNode.removeChild(this.markerWrapper_);
  }
  this.removeDragListeners_();
};
RichMarker.prototype['onRemove'] = RichMarker.prototype.onRemove;


/**
 * RichMarker Anchor positions
 * @enum {number}
 */
var RichMarkerPosition = {
  'TOP_LEFT': 1,
  'TOP': 2,
  'TOP_RIGHT': 3,
  'LEFT': 4,
  'MIDDLE': 5,
  'RIGHT': 6,
  'BOTTOM_LEFT': 7,
  'BOTTOM': 8,
  'BOTTOM_RIGHT': 9
};
window['RichMarkerPosition'] = RichMarkerPosition;

/* An InfoBox is like an info window, but it displays
 * under the marker, opens quicker, and has flexible styling.
 * @param {GLatLng} latlng Point to place bar at
 * @param {Object} opts Passes configuration options - content, 
 *   offsetVertical, offsetHorizontal, className, height, width
 */
function InfoBox(latlng, map, opts) {
  google.maps.OverlayView.call(this, map);
  this.latlng_ = latlng;
  this.content_ = opts.content || "Hello World";
  this.offsetVertical_ = opts.offsetVertical || -185;
  this.offsetHorizontal_ = opts.offsetHorizontal || -5;

  this.height_ = opts.height || 175;
  this.width_ = opts.width || 270;
  this.map_ = map;
}

/* InfoBox extends GOverlay class from the Google Maps API
 */
InfoBox.prototype = new google.maps.OverlayView();

/* Creates the DIV representing this InfoBox
 * @param {GMap2} map The map to add infobox to
 */
InfoBox.prototype.panes_changed = function() {
  if (this.div_) {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }

  var panes = this.get('panes');

  if (panes) {
    // Create the DIV representing our Bar
    var div = this.div_ = document.createElement("div");
    div.style.border = "0px none";
    div.style.position = "absolute";
    div.style.background = "url('http://ace.imageg.net/images/WIZ_ACE_myStore/mapBubble.png')";
    div.style.paddingTop = "12px";
    div.style.width = this.width_ + "px";
    div.style.height = this.height_ + "px";
    var contentDiv = document.createElement("div");
    contentDiv.style.padding = "30px"
    contentDiv.innerHTML = this.content_;

    var topDiv = document.createElement("div");
    topDiv.style.textAlign = "right";
    topDiv.style.paddingRight = "10px";
    var closeImg = document.createElement("img");
    closeImg.style.cursor = "pointer";
    closeImg.src = "http://www.google.com/intl/en_us/mapfiles/close.gif";
    topDiv.appendChild(closeImg);

    function removeInfoBox(ib) {
      return function() { 
        ib.setMap(null);
      };
    }

    google.maps.event.addDomListener(closeImg, 'click', removeInfoBox(this));

    div.appendChild(topDiv);
    div.appendChild(contentDiv);

    this.draw();

    // Then add this overlay to the DOM
    panes.floatPane.appendChild(div);
  }
}

/* Redraw the Bar based on the current projection and zoom level
 */
InfoBox.prototype.draw = function() {
  if (!this.div_) return;

  // Calculate the DIV coordinates of two opposite corners of our bounds to
  // get the size and position of our Bar
  var pixPosition = this.getProjection.fromLatLngToDivPixel(this.latlng_);
  if (!pixPosition) return;

  // Now position our DIV based on the DIV coordinates of our bounds
  this.div_.style.width = this.width_ + "px";
  this.div_.style.left = (pixPosition.x + this.offsetHorizontal_) + "px";
  this.div_.style.height = this.height_ + "px";
  this.div_.style.top = (pixPosition.y + this.offsetVertical_) + "px";
  this.div_.style.display = 'block';

  // if we go beyond map, pan map
  var mapWidth = this.map_.getDiv().offsetWidth;
  var mapHeight = this.map_.getDiv().offsetHeight;
  var bounds = this.map_.getBounds();
  var boundsSpan = bounds.toSpan();
  var longSpan = boundsSpan.lng();
  var latSpan = boundsSpan.lat();
  var degWidth = (this.width_/mapWidth) * longSpan;
  var degHeight = (this.height_/mapHeight) * latSpan;

  if (this.latlng_.lng() + degWidth > bounds.getNorthEast().lng()) {
    this.map_.setCenter(this.latlng_);
  }

  var bottompt = new google.maps.LatLng( (this.latlng_.lat() - degHeight), this.latlng_.lng());
  if (!bounds.contains(bottompt)) {
    this.map_.setCenter(this.latlng_);
  }
}

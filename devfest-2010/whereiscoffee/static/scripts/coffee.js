/**
 * A cofee shop finder and adder
 *
 * @param {string} mapDivId The id of the div to add the map.
 * @constructor
 */
function Coffee(mapDivId) {
  this.shopMarkers_ = {};
  this.setMapHeight();

  this.mapDiv_ = document.getElementById(mapDivId);
  var options = {
    zoom: 13,
    center: new google.maps.LatLng(-33.86681373718, 151.19591345512), // Sydney
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false
  };

  this.map_ = new google.maps.Map(this.mapDiv_, options);

  this.shopIcon_ = new google.maps.MarkerImage('/static/images/coffee.png',
      new google.maps.Size(32, 37));
  this.shopActiveIcon_ = new google.maps.MarkerImage(
      '/static/images/coffee-active.png', new google.maps.Size(32, 37));


  var that = this;
  google.maps.event.addDomListener(window, 'resize', function() {
    that.setMapHeight();
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.findStores_();
  });

  $('a', '#store-info-close').click(function() {
    that.showMap();
    return false;
  });

  var icon = new google.maps.MarkerImage('/static/images/my-location.png',
    new google.maps.Size(14, 14),
    new google.maps.Point(0, 0),
    new google.maps.Point(7, 7));

  this.userLocationMarker_ = new google.maps.Marker({
    icon: icon,
    clickable: false,
    zIndex: 200
  });

  this.locationAccuracy_ = new google.maps.Circle({
    fillColor: '#0000ff',
    fillOpacity: 0.1,
    strokeColor: '#0000ff',
    strokeOpacity: 0.3,
    strokeWeight: 1,
    clickable: false,
    zIndex: 199
  });

  this.locationAccuracy_.bindTo('center', this.userLocationMarker_, 'position');

  this.shopInfoWindow_ = new google.maps.InfoWindow();

  this.addActions_();
  this.getUserPosition_();
}

/**
 * Add the user actions.
 * @private
 */
Coffee.prototype.addActions_ = function() {
  this.setupAddNew_();
  this.setupGetUserPosition_();
};

/**
 * Get places info near the marker.
 * @private
 */
Coffee.prototype.getPlaces_ = function() {
  var that = this;
  var pos = this.addNewMarker_.getPosition()
  var data = {
    action: 'search',
    location: pos.toUrlValue(),
    radius: 100
  };

  $.post('/places', data, function(data) {
    that.populatePlaces_(data);
  });
};

/**
 * Populate the places select box
 * @param {Array.<string, *>} places A places results json object.
 * @private
 */
Coffee.prototype.populatePlaces_ = function(places) {
  var hasOne = false;
  var html = '<select id="places-options">';
  if (places.status == 'OK') {
    for (var i = 0, result; result = places.results[i]; i++) {
      if (result.types.indexOf('establishment') != -1) {
        hasOne = true;
        html += '<option value="' + result.name + '">' + result.name +
            '</option>';
      }
    }
  }
  html += '<option value="">Other</option></select>';

  if (!hasOne) {
    return;
  }

  $('#new-shop-name').hide();

  $('#new-shop-name-options').html(html);
  this.setMapHeight();

  var options = $('#places-options', '#new-shop-name-options');

  var that = this;
  $(options).change(function() {
    if ($(this).val() == '') {
      $('#new-shop-name').show();
      that.setMapHeight();
    } else {
      $('#new-shop-name').hide();
      that.setMapHeight();
    }
  });

  $(options).keypress(function() {
    if ($(this).val() == '') {
      $('#new-shop-name').show();
    } else {
      $('#new-shop-name').hide();
    }
  });
};

/**
 * Add the events to goto the users position.
 * @private
 */
Coffee.prototype.setupGetUserPosition_ = function() {
  var that = this;
  $('#my-location').click(function() {
    that.getUserPosition_();
    return false;
  });
};

/**
 * Set the users position.
 * @param {Object} position A html5 position object.
 * @private
 */
Coffee.prototype.setUsersPosition_ = function(position) {
  var pos = new google.maps.LatLng(position.coords.latitude,
    position.coords.longitude);
  this.userPosition_ = pos;
  this.userLocationMarker_.setPosition(pos);
  if (!this.userLocationMarker_.getMap()) {
    this.userLocationMarker_.setMap(this.map_);
  }

  this.locationAccuracy_.setRadius(position.coords.accuracy);
  if (!this.locationAccuracy_.getMap()) {
    this.locationAccuracy_.setMap(this.map_);
  }
};

/**
 * Gets the users position and adding position watching.
 * @private
 */
Coffee.prototype.getUserPosition_ = function() {
  var that = this;
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function(position) {
      that.setUsersPosition_(position);
    });
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
          position.coords.longitude);
      that.setUsersPosition_(position);
      that.map_.panTo(pos);
    }, null, {timeout: 2000});
  }
};

/**
 * Find the stores in the map bounds.
 * @private
 */
Coffee.prototype.findStores_ = function() {
  var bounds = this.map_.getBounds();
  var that = this;
  var data = {
    action: 'search',
    bounds: bounds.toUrlValue()
  };
  $.post('/stores', data, function(data) {
    that.addStores_(data);
  });
};

/**
 * Add a store marker
 * @param {Object} shop A shop object with key, name, lat, lng.
 * @return {google.maps.Marker} A google maps marker.
 * @private
 */
Coffee.prototype.addStoreMarker_ = function(shop) {
  var position = new google.maps.LatLng(shop.lat, shop.lng);
  var marker = new google.maps.Marker({
    position: position,
    map: this.map_,
    title: shop.name,
    icon: this.shopIcon_,
    zIndex: 100
  });

  marker.key = shop.key;
  var that = this;
  var listener = google.maps.event.addListener(marker, 'click', function() {
    that.loadShop_(this);
  });

  marker.listener = listener;
  return marker;
};

/**
 * Adds stores to the map if they are not already in view.
 * @param {Array.<string, *>} shops An array of shops.
 * @private
 */
Coffee.prototype.addStores_ = function(shops) {
  var d = new Date();
  var added = '_' + d.getTime();
  for (var i = 0, shop; shop = shops[i]; i++) {
    if (this.shopMarkers_[shop.key]) {
      this.shopMarkers_[shop.key].added = added;
    } else {
      var marker = this.addStoreMarker_(shop);
      marker.added = added;
      this.shopMarkers_[shop.key] = marker;
    }
  }

  for (var key in this.shopMarkers_) {
    if (this.shopMarkers_[key].added != added) {
      google.maps.event.removeListener(this.shopMarkers_[key].listener);
      this.shopMarkers_[key].setMap(null);
      delete this.shopMarkers_[key];
    }
  }

  if (this.activeMarkerKey_ && this.shopMarkers_[this.activeMarkerKey_]) {
    this.shopMarkers_[this.activeMarkerKey_].setIcon(this.shopActiveIcon_);
  }
};

/**
 * Load a shop's info
 * @param {google.maps.Marker} marker A shop marker.
 * @private
 */
Coffee.prototype.loadShop_ = function(marker) {
  var data = {
    action: 'load',
    key: marker.key
  }

  this.shopIcon_ = new google.maps.MarkerImage('/static/images/coffee.png',
      new google.maps.Size(32, 37));
  marker.setIcon(this.shopActiveIcon_);

  if (this.activeMarker_) {
    this.activeMarker_.setIcon(this.shopIcon_);
  }

  this.activeMarker_ = marker;
  this.activeMarkerKey_ = marker.key;

  var that = this;
  $.post('/stores', data, function(data) {
    that.showShop(marker, data);
  });
};


/**
 * Show a shop's info
 *
 * @param {google.maps.Marker} marker The shop marker.
 * @param {Object} shop The shop object.
 */
Coffee.prototype.showShop = function(marker, shop) {
  if (this.addNewMarker_) {
    this.addNewMarker_.setMap(null);
  }
  this.newInfoWindowIsOpen_ = true;

  var html = '<div id="shop-info">' +
    '<div><h1>' + shop.name + ' ';
  for (var i = 1; i < 6; i++) {
    if (i <= shop.rating) {
      html += '<span class="star-full"></span>';
    } else {
      html += '<span class="star-empty"></span>';
    }
  }

  html += '</h1></div>' +
    '<div class="row">' + shop.address + '</div>' +
    '<div class="row"><button id="get-directions">Directions</button> ' +
    '<button id="close-shop-info">Close</button>' +
    '</div>' +
    '</div>';

  var html = $(html);

  var directions = $('#get-directions', html);

  var that = this;
  $(directions).click(function() {
    that.getDirectionsTo_(shop);
    return false;
  });

  var close = $('#close-shop-info', html);
  $(close).click(function() {
    that.closeInfo_();
  });

  $('#info').html(html);
  $('#info').show();
  this.setMapHeight();
};

/**
 * Get directions to a shop
 * @param {Object} shop A shop object.
 * @private
 */
Coffee.prototype.getDirectionsTo_ = function(shop) {
  if (!this.directionsService_) {
    this.directionsService_ = new google.maps.DirectionsService();
    this.directionsRenderer_ = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: '#cc00ff'
      }
    });
    this.directionsRenderer_.setMap(this.map_);
  }

  var request = {
    origin: this.userLocationMarker_.getPosition(),
    destination: shop.address,
    travelMode: google.maps.DirectionsTravelMode.WALKING
  };

  var that = this;
  this.directionsService_.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      that.directionsRenderer_.setDirections(result);
    }
  });
};

/**
 * Adds events to the new shop form
 * @private
 */
Coffee.prototype.setupAddNew_ = function() {
  var that = this;
  $('#add-new').click(function(e) {
    if (this.newShopForm_) {
      $('#new-shop-name').val('');
      $('#new-shop-address').val('');
      $('#new-shop-rating').val('');
    }
    that.addNew_(e);
    return false;
  });
};

/**
 * HTML template for adding a new shop
 * @type {string}
 */
Coffee.prototype.NEW_SHOP_FORM_HTML = '<div id="add-new-shop-form">' +
  '<h1>Add a new Coffee Shop</h1>' +
  '<div class="row"><label>Name:</label>' +
  '<span id="new-shop-name-options"></span> ' +
  '<input type="text" id="new-shop-name"/></div>' +
  '<div class="row"><label>Address:</label><input type="text" ' +
  'id="new-shop-address"/></div>' +
  '<div class="row"><label>Rating:</label>' +
  '<select id="new-shop-rating">' +
  '<option value="1">1</option>' +
  '<option value="2">2</option>' +
  '<option value="3">3</option>' +
  '<option value="4">4</option>' +
  '<option value="5">5</option>' +
  '</select>' +
  '</div>' +
  '<div class="row"><button id="new-shop-save">Add!</button> ' +
  '<button id="new-shop-close">Close</button></div>' +
  '</div>';

/**
 * Save a new shop.
 * @private
 */
Coffee.prototype.saveNewShop_ = function() {
  if ($('#new-shop-name').css('display') == 'none') {
    var name = $.trim($('#places-options').val());
  } else {
    var name = $.trim($('#new-shop-name').val());
  }

  var address = $.trim($('#new-shop-address').val());
  var rating = $.trim($('#new-shop-rating').val());
  var pos = this.addNewMarker_.getPosition();

  $('#new-shop-name').val('');
  $('#new-shop-address').val('');
  $('#new-shop-rating').val('');

  if (name == '' || address == '') {
    window.alert('Name and address are required');
    return;
  }

  var data = {
    action: 'new',
    name: name,
    address: address,
    rating: rating,
    lat: pos.lat(),
    lng: pos.lng()
  };

  var that = this;
  $.post('/stores', data, function(data) {
    that.newStoreComplete_(data);
  });
};

/**
 * Saving a store callback
 * @param {Object} shop a Shop object.
 * @private
 */
Coffee.prototype.newStoreComplete_ = function(shop) {
  var marker = this.addStoreMarker_(shop);
  this.shopMarkers_[shop.key] = marker;
  this.addNewMarker_.setMap(null);
  this.newInfoWindowIsOpen_ = false;
  this.closeInfo_();
};


/**
 * Adds events to the new shop form
 * @private
 */
Coffee.prototype.setupNewShopForm_ = function() {
  this.newShopForm_ = $(this.NEW_SHOP_FORM_HTML);
  var saveForm = $('#new-shop-save', this.newShopForm_);

  var that = this;
  $(saveForm).click(function() {
    that.saveNewShop_();
    return false;
  });

  var closeForm = $('#new-shop-close', this.newShopForm_);

  $(closeForm).click(function() {
    that.closeInfo_();
    return false;
  });
};

/**
 * Closes the info area
 * @private
 */
Coffee.prototype.closeInfo_ = function() {
  $('#info').hide();
  this.newInfoWindowIsOpen_ = false;
  if (this.addNewMarker_) {
    this.addNewMarker_.setMap(null);
  }

  if (this.activeMarker_) {
    this.activeMarker_.setIcon(this.shopIcon_);
    this.activeMarkerKey_ = false;
  }

  this.setMapHeight();
};

/**
 * Adds a marker to the center of the map and shows the new shop form
 * @param {Event} e The event.
 * @private
 */
Coffee.prototype.addNew_ = function(e) {
  if (!this.addNewMarker_) {
    this.addNewMarker_ = new google.maps.Marker({
      zIndex: 190,
      clickable: false
    });
    var that = this;
    google.maps.event.addListener(this.map_, 'click', function(e) {
      that.addNewMarker_.setPosition(e.latLng);
      if (that.newInfoWindowIsOpen_ && that.addNewMarker_.getMap()) {
        that.reverseGeocodeNewStore_();
        that.getPlaces_();
      }
    });
    this.setupNewShopForm_();
  }
  $('#info').html(this.newShopForm_);
  this.setupNewShopForm_()
  this.addNewMarker_.setMap(this.map_);
  this.addNewMarker_.setPosition(this.map_.getCenter());
  this.newInfoWindowIsOpen_ = true;
  $('#info').show();

  if (this.activeMarker_) {
    this.activeMarker_.setIcon(this.shopIcon_);
    this.activeMarkerKey_ = false;
  }

  this.setMapHeight();
  this.reverseGeocodeNewStore_();
  this.getPlaces_();
};

/**
 * Reverse geocode the new store marker
 * @private
 */
Coffee.prototype.reverseGeocodeNewStore_ = function() {
  if (!this.geocoder_) {
    this.geocoder_ = new google.maps.Geocoder();
  }

  var that = this;
  var request = {latLng: this.addNewMarker_.getPosition()};
  this.geocoder_.geocode(request, function(results, status) {
    that.handleNewStoreGeocode_(results, status);
  });
};

/**
 * Handles the callback from the new geocode request
 *
 * @param {Array.<string, *>} results The geocoder results.
 * @param {string} status The geocoder status.
 * @private
 */
Coffee.prototype.handleNewStoreGeocode_ = function(results, status) {
  var formattedAddress;
  if (status == google.maps.GeocoderStatus.OK) {
    if (results[0]) {
      formattedAddress = results[0].formatted_address;
    }
  }

  if (formattedAddress) {
    $('#new-shop-address').val(formattedAddress);
  }
};

/**
 * Sets the height of the map
 */
Coffee.prototype.setMapHeight = function() {
  var windowHeight = $(window).height();
  var footerHeight = $('#footer').height();
  var contentPos = $('#content').offset();
  var availableHeight = windowHeight - footerHeight - contentPos.top - 2;

  var mapDiv = $(this.mapDiv_);

  if (this.newInfoWindowIsOpen_) {
    var infoHeight = $('#info').height();
    availableHeight -= (infoHeight + 1);
  }
  mapDiv.css('height', availableHeight);
  if (this.map_) {
    google.maps.event.trigger(this.map_, 'resize');
  }
};


// Create the coffee app
google.maps.event.addDomListenerOnce(window, 'load', function() {
  var coffee = new Coffee('map');
});

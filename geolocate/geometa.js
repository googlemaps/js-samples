// From
// http://google-ajax-examples.googlecode.com/svn/trunk/whereareyou/scripts/geometa.js
function prepareGeolocation(opt_force) {
if ( opt_force || typeof navigator.geolocation == "undefined" || navigator.geolocation.shim ) (function(){

// -- BEGIN GEARS_INIT
(function() {
  // We are already defined. Hooray!
  if (window.google && google.gears) {
    return;
  }

  var factory = null;

  // Firefox
  if (typeof GearsFactory != 'undefined') {
    factory = new GearsFactory();
  } else {
    // IE
    try {
      factory = new ActiveXObject('Gears.Factory');
      // privateSetGlobalObject is only required and supported on WinCE.
      if (factory.getBuildInfo().indexOf('ie_mobile') != -1) {
        factory.privateSetGlobalObject(this);
      }
    } catch (e) {
      // Safari
      if ((typeof navigator.mimeTypes != 'undefined')
           && navigator.mimeTypes["application/x-googlegears"]) {
        factory = document.createElement("object");
        factory.style.display = "none";
        factory.width = 0;
        factory.height = 0;
        factory.type = "application/x-googlegears";
        document.documentElement.appendChild(factory);
      }
    }
  }

  // *Do not* define any objects if Gears is not installed. This mimics the
  // behavior of Gears defining the objects in the future.
  if (!factory) {
    return;
  }

  // Now set up the objects, being careful not to overwrite anything.
  //
  // Note: In Internet Explorer for Windows Mobile, you can't add properties to
  // the window object. However, global objects are automatically added as
  // properties of the window object in all browsers.
  if (!window.google) {
    google = {};
  }

  if (!google.gears) {
    google.gears = {factory: factory};
  }
})();
// -- END GEARS_INIT

var GearsGeoLocation = (function() {
    // -- PRIVATE
    var geo = google.gears.factory.create('beta.geolocation');

    var wrapSuccess = function(callback, self) { // wrap it for lastPosition love
        return function(position) {
            callback(position);
            self.lastPosition = position;
        }
    }

    // -- PUBLIC
    return {
        shim: true,

        type: "Gears",

        lastPosition: null,

        getCurrentPosition: function(successCallback, errorCallback, options) {
            var self = this;
            var sc = wrapSuccess(successCallback, self);
            geo.getCurrentPosition(sc, errorCallback, options);
        },

        watchPosition: function(successCallback, errorCallback, options) {
            geo.watchPosition(successCallback, errorCallback, options);
        },

        clearWatch: function(watchId) {
            geo.clearWatch(watchId);
        },

        getPermission: function(siteName, imageUrl, extraMessage) {
            geo.getPermission(siteName, imageUrl, extraMessage);
        }

    };
})();

var AjaxGeoLocation = (function() {
    // -- PRIVATE
    var loading = false;
    var loadGoogleLoader = function() {
        if (!hasGoogleLoader() && !loading) {
            loading = true;
            var s = document.createElement('script');
            s.src = 'http://www.google.com/jsapi?callback=_google_loader_apiLoaded';
            s.type = "text/javascript";
            document.getElementsByTagName('body')[0].appendChild(s);
        }
    };

    var queue = [];
    var addLocationQueue = function(callback) {
        queue.push(callback);
    }

    var runLocationQueue = function() {
        if (hasGoogleLoader()) {
            while (queue.length > 0) {
                var call = queue.pop();
                call();
            }
        }
    }

    window['_google_loader_apiLoaded'] = function() {
        runLocationQueue();
    }

    var hasGoogleLoader = function() {
        return (window['google'] && google['loader']);
    }

    var checkGoogleLoader = function(callback) {
        if (hasGoogleLoader()) return true;

        addLocationQueue(callback);

        loadGoogleLoader();

        return false;
    };

    loadGoogleLoader(); // start to load as soon as possible just in case

    // -- PUBLIC
    return {
        shim: true,

        type: "ClientLocation",

        lastPosition: null,

        getCurrentPosition: function(successCallback, errorCallback, options) {
            var self = this;
            if (!checkGoogleLoader(function() {
                self.getCurrentPosition(successCallback, errorCallback, options);
            })) return;

            if (google.loader.ClientLocation) {
                var cl = google.loader.ClientLocation;

                var position = {
                    latitude: cl.latitude,
                    longitude: cl.longitude,
                    altitude: null,
                    accuracy: 43000, // same as Gears accuracy over wifi?
                    altitudeAccuracy: null,
                    heading: null,
                    velocity: null,
                    timestamp: new Date(),

                    // extra info that is outside of the bounds of the core API
                    address: {
                        city: cl.address.city,
                        country: cl.address.country,
                        country_code: cl.address.country_code,
                        region: cl.address.region
                    }
                };

                successCallback(position);

                this.lastPosition = position;
            } else if (errorCallback === "function")  {
                errorCallback({ code: 3, message: "Using the Google ClientLocation API and it is not able to calculate a location."});
            }
        },

        watchPosition: function(successCallback, errorCallback, options) {
            this.getCurrentPosition(successCallback, errorCallback, options);

            var self = this;
            var watchId = setInterval(function() {
                self.getCurrentPosition(successCallback, errorCallback, options);
            }, 10000);

            return watchId;
        },

        clearWatch: function(watchId) {
            clearInterval(watchId);
        },

        getPermission: function(siteName, imageUrl, extraMessage) {
            // for now just say yes :)
            return true;
        }

    };
})();

// If you have Gears installed use that, else use Ajax ClientLocation
navigator.geolocation = (window.google && google.gears && google.gears.factory.create) ? GearsGeoLocation : AjaxGeoLocation;

})();
}

(function(exports) {
  "use strict";

  /*
   * Click the map to set a new location for the Street View camera.
   */

  function initMap() {
    const berkeley = {
      lat: 37.869085,
      lng: -122.254775
    };
    const sv = new google.maps.StreetViewService();
    exports.panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano")
    ); // Set up the map.

    exports.map = new google.maps.Map(document.getElementById("map"), {
      center: berkeley,
      zoom: 16,
      streetViewControl: false
    }); // Set the initial Street View camera to the center of the map

    sv.getPanorama(
      {
        location: berkeley,
        radius: 50
      },
      processSVData
    ); // Look for a nearby Street View panorama when the map is clicked.
    // getPanorama will return the nearest pano when the given
    // radius is 50 meters or less.

    exports.map.addListener("click", function(event) {
      sv.getPanorama(
        {
          location: event.latLng,
          radius: 50
        },
        processSVData
      );
    });
  }

  function processSVData(data, status) {
    if (status === "OK") {
      const location = data.location;
      const marker = new google.maps.Marker({
        position: location.latLng,
        map: exports.map,
        title: location.description
      });
      exports.panorama.setPano(location.pano);
      exports.panorama.setPov({
        heading: 270,
        pitch: 0
      });
      exports.panorama.setVisible(true);
      marker.addListener("click", function() {
        const markerPanoID = location.pano; // Set the Pano to use the passed panoID.

        exports.panorama.setPano(markerPanoID);
        exports.panorama.setPov({
          heading: 270,
          pitch: 0
        });
        exports.panorama.setVisible(true);
      });
    } else {
      console.error("Street View data not found for this location.");
    }
  }

  exports.initMap = initMap;
  exports.processSVData = processSVData;
})((this.window = this.window || {}));

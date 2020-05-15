(function(exports) {
  "use strict";

  function initPano() {
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: {
          lat: 37.869,
          lng: -122.255
        },
        pov: {
          heading: 270,
          pitch: 0
        },
        visible: true
      }
    );
    panorama.addListener("pano_changed", function() {
      var panoCell = document.getElementById("pano-cell");
      panoCell.innerHTML = panorama.getPano();
    });
    panorama.addListener("links_changed", function() {
      var linksTable = document.getElementById("links_table");

      while (linksTable.hasChildNodes()) {
        linksTable.removeChild(linksTable.lastChild);
      }

      var links = panorama.getLinks();

      for (var i in links) {
        var row = document.createElement("tr");
        linksTable.appendChild(row);
        var labelCell = document.createElement("td");
        labelCell.innerHTML = "<b>Link: " + i + "</b>";
        var valueCell = document.createElement("td");
        valueCell.innerHTML = links[i].description;
        linksTable.appendChild(labelCell);
        linksTable.appendChild(valueCell);
      }
    });
    panorama.addListener("position_changed", function() {
      var positionCell = document.getElementById("position-cell");
      positionCell.firstChild.nodeValue = panorama.getPosition() + "";
    });
    panorama.addListener("pov_changed", function() {
      var headingCell = document.getElementById("heading-cell");
      var pitchCell = document.getElementById("pitch-cell");
      headingCell.firstChild.nodeValue = panorama.getPov().heading + "";
      pitchCell.firstChild.nodeValue = panorama.getPov().pitch + "";
    });
  }

  exports.initPano = initPano;
})((this.window = this.window || {}));

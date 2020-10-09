// [START maps_streetview_events]
function initPano() {
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: { lat: 37.869, lng: -122.255 },
      pov: {
        heading: 270,
        pitch: 0,
      },
      visible: true,
    }
  );
  panorama.addListener("pano_changed", () => {
    const panoCell = document.getElementById("pano-cell");
    panoCell.innerHTML = panorama.getPano();
  });
  panorama.addListener("links_changed", () => {
    const linksTable = document.getElementById("links_table");

    while (linksTable.hasChildNodes()) {
      linksTable.removeChild(linksTable.lastChild);
    }
    const links = panorama.getLinks();

    for (const i in links) {
      const row = document.createElement("tr");
      linksTable.appendChild(row);
      const labelCell = document.createElement("td");
      labelCell.innerHTML = "<b>Link: " + i + "</b>";
      const valueCell = document.createElement("td");
      valueCell.innerHTML = links[i].description;
      linksTable.appendChild(labelCell);
      linksTable.appendChild(valueCell);
    }
  });
  panorama.addListener("position_changed", () => {
    const positionCell = document.getElementById("position-cell");
    positionCell.firstChild.nodeValue = panorama.getPosition() + "";
  });
  panorama.addListener("pov_changed", () => {
    const headingCell = document.getElementById("heading-cell");
    const pitchCell = document.getElementById("pitch-cell");
    headingCell.firstChild.nodeValue = panorama.getPov().heading + "";
    pitchCell.firstChild.nodeValue = panorama.getPov().pitch + "";
  });
}
// [END maps_streetview_events]

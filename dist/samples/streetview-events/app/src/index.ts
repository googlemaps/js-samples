/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

function initPano() {
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano") as HTMLElement,
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
    const panoCell = document.getElementById("pano-cell") as HTMLElement;
    panoCell.innerHTML = panorama.getPano();
  });

  panorama.addListener("links_changed", () => {
    const linksTable = document.getElementById("links_table") as HTMLElement;

    while (linksTable.hasChildNodes()) {
      linksTable.removeChild(linksTable.lastChild as ChildNode);
    }
    const links = panorama.getLinks();

    for (const i in links) {
      const row = document.createElement("tr");
      linksTable.appendChild(row);
      const labelCell = document.createElement("td");
      labelCell.innerHTML = "<b>Link: " + i + "</b>";
      const valueCell = document.createElement("td");
      valueCell.innerHTML = links[i].description as string;
      linksTable.appendChild(labelCell);
      linksTable.appendChild(valueCell);
    }
  });

  panorama.addListener("position_changed", () => {
    const positionCell = document.getElementById(
      "position-cell"
    ) as HTMLElement;
    (positionCell.firstChild as HTMLElement).nodeValue =
      panorama.getPosition() + "";
  });

  panorama.addListener("pov_changed", () => {
    const headingCell = document.getElementById("heading-cell") as HTMLElement;
    const pitchCell = document.getElementById("pitch-cell") as HTMLElement;
    (headingCell.firstChild as HTMLElement).nodeValue =
      panorama.getPov().heading + "";
    (pitchCell.firstChild as HTMLElement).nodeValue =
      panorama.getPov().pitch + "";
  });
}
export { initPano };

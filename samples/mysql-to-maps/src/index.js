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

// [START maps_mysql_to_maps]
export var customLabel = {
  restaurant: {
    label: "R"
  },
  bar: {
    label: "B"
  }
};

export function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-33.863276, 151.207977),
    zoom: 12
  });
  var infoWindow = new google.maps.InfoWindow();

  // Change this depending on the name of your PHP or XML file
  downloadUrl(
    "https://storage.googleapis.com/mapsdevsite/json/mapmarkers2.xml",
    function(data) {
      var xml = data.responseXML;
      var markers = xml.documentElement.getElementsByTagName("marker");
      Array.prototype.forEach.call(markers, function(markerElem) {
        var id = markerElem.getAttribute("id");
        var name = markerElem.getAttribute("name");
        var address = markerElem.getAttribute("address");
        var type = markerElem.getAttribute("type");
        var point = new google.maps.LatLng(
          parseFloat(markerElem.getAttribute("lat")),
          parseFloat(markerElem.getAttribute("lng"))
        );

        var infowincontent = document.createElement("div");
        var strong = document.createElement("strong");
        strong.textContent = name;
        infowincontent.appendChild(strong);
        infowincontent.appendChild(document.createElement("br"));

        var text = document.createElement("text");
        text.textContent = address;
        infowincontent.appendChild(text);
        var icon = customLabel[type] || {};
        var marker = new google.maps.Marker({
          map: map,
          position: point,
          label: icon.label
        });
        marker.addListener("click", function() {
          infoWindow.setContent(infowincontent);
          infoWindow.open(map, marker);
        });
      });
    }
  );
}

export function downloadUrl(url, callback) {
  var request = window.ActiveXObject
    ? new ActiveXObject("Microsoft.XMLHTTP")
    : new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      request.onreadystatechange = doNothing;
      callback(request, request.status);
    }
  };

  request.open("GET", url, true);
  request.send(null);
}

export function doNothing() {}
// [END maps_mysql_to_maps]

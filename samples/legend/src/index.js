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

// [START maps_legend_script_body]
export var map;
export function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: new google.maps.LatLng(-33.91722, 151.23064),
    mapTypeId: "roadmap"
  });

  var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  var icons = {
    parking: {
      name: "Parking",
      icon: iconBase + "parking_lot_maps.png"
    },
    library: {
      name: "Library",
      icon: iconBase + "library_maps.png"
    },
    info: {
      name: "Info",
      icon: iconBase + "info-i_maps.png"
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.2263),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.91539, 151.2282),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.91747, 151.22912),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.9191, 151.22907),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.91725, 151.23011),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.91872, 151.23089),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.91784, 151.23094),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.91682, 151.23149),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.9179, 151.23463),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.916988, 151.23364),
      type: "info"
    },
    {
      position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
      type: "parking"
    },
    {
      position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
      type: "parking"
    },
    {
      position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
      type: "parking"
    },
    {
      position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
      type: "parking"
    },
    {
      position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
      type: "parking"
    },
    {
      position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
      type: "parking"
    },
    {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: "parking"
    },
    {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      type: "library"
    }
  ];

  // Create markers.
  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });

  var legend = document.getElementById("legend");
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement("div");
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
// [END maps_legend_script_body]

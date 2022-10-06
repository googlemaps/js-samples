/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_advanced_markers_graphics]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.42475, lng: -122.0845 },
    zoom: 13,
    mapId: "4504f8b37365c3d0",
  });
  // [START maps_advanced_markers_graphics_inline]
  const parser = new DOMParser();
  // A marker with a custom inline SVG.
  const pinSvgString =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="61" viewBox="0 0 92.3 132.3"><path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"/><path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"/><path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"/><path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"/><path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"/></svg>';
  const pinSvgElement = parser.parseFromString(
    pinSvgString,
    "image/svg+xml"
  ).documentElement;
  const pinSvgMarkerView = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.42475, lng: -122.094 },
    content: pinSvgElement,
    title: "A marker using a custom SVG image.",
  });
  // [END maps_advanced_markers_graphics_inline]
  // [START maps_advanced_markers_graphics_png]
  // A marker with a with a URL pointing to a PNG.
  const beachFlagImg = document.createElement("img");

  beachFlagImg.src =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  const beachFlagMarkerView = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.434, lng: -122.082 },
    content: beachFlagImg,
    title: "A marker using a custom PNG Image",
  });
  // [END maps_advanced_markers_graphics_png]
  // [START maps_advanced_markers_graphics_svg_glyph]
  // A marker with a custom SVG glyph.
  const glyphImg = document.createElement("img");

  glyphImg.src =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/google_logo_g.svg";

  const glyphSvgPinView = new google.maps.marker.PinView({
    glyph: glyphImg,
  });
  const glyphSvgMarkerView = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.425, lng: -122.07 },
    content: glyphSvgPinView.element,
    title: "A marker using a custom SVG for the glyph.",
  });
  // [END maps_advanced_markers_graphics_svg_glyph]
  // [START maps_advanced_markers_graphics_place_icon]
  // A marker customized using a place icon and color, name, and geometry.
  const request = {
    placeId: "ChIJN5Nz71W3j4ARhx5bwpTQEGg",
    fields: ["geometry", "name", "icon_mask_base_uri", "icon_background_color"],
  };
  const service = new google.maps.places.PlacesService(map);

  service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.geometry &&
      place.geometry.location
    ) {
      const pinView = new google.maps.marker.PinView({
        background: place.icon_background_color,
        glyph: new URL(place.icon_mask_base_uri + ".png"),
      });
      const placeIconMarkerView = new google.maps.marker.AdvancedMarkerView({
        map,
        position: place.geometry.location,
        content: pinView.element,
        title: place.name,
      });
    }
  });

  // [END maps_advanced_markers_graphics_place_icon]
  // [START maps_advanced_markers_graphics_fontawesome]
  // A marker using a Font Awesome icon for the glpyh.
  const icon = document.createElement("div");

  icon.innerHTML = '<i class="fa fa-pizza-slice fa-lg"></i>';

  const faPinView = new google.maps.marker.PinView({
    glyph: icon,
    glyphColor: "#ff8300",
    background: "#FFD514",
    borderColor: "#ff8300",
  });
  const faMarkerView = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.412, lng: -122.095829650878 },
    content: faPinView.element,
    title: "A marker using a FontAwesome icon for the glyph.",
  });
  // [END maps_advanced_markers_graphics_fontawesome]
}

window.initMap = initMap;
// [END maps_advanced_markers_graphics]

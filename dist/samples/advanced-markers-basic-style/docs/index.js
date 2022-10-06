/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_advanced_markers_basic_style]
const parser = new DOMParser();

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.419, lng: -122.02 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinView is paired with a MarkerView to demonstrate setting each parameter.
  // [START maps_advanced_markers_basic_style_title]
  // Default marker with title text (no PinView).
  const markerViewWithText = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.419, lng: -122.03 },
    title: "Title text for the marker at lat: 37.419, lng: -122.03",
  });
  // [END maps_advanced_markers_basic_style_title]
  // [START maps_advanced_markers_basic_style_scale]
  // Adjust the scale.
  const pinViewScaled = new google.maps.marker.PinView({
    scale: 1.5,
  });
  const markerViewScaled = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.419, lng: -122.02 },
    content: pinViewScaled.element,
  });
  // [END maps_advanced_markers_basic_style_scale]
  // [START maps_advanced_markers_basic_style_background]
  // Change the background color.
  const pinViewBackground = new google.maps.marker.PinView({
    background: "#FBBC04",
  });
  const markerViewBackground = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.419, lng: -122.01 },
    content: pinViewBackground.element,
  });
  // [END maps_advanced_markers_basic_style_background]
  // [START maps_advanced_markers_basic_style_border]
  // Change the border color.
  const pinViewBorder = new google.maps.marker.PinView({
    borderColor: "#137333",
  });
  const markerViewBorder = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.415, lng: -122.03 },
    content: pinViewBorder.element,
  });
  // [END maps_advanced_markers_basic_style_border]
  // [START maps_advanced_markers_basic_style_glyph]
  // Change the glyph color.
  const pinViewGlyph = new google.maps.marker.PinView({
    glyphColor: "white",
  });
  const markerViewGlyph = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.415, lng: -122.02 },
    content: pinViewGlyph.element,
  });
  // [END maps_advanced_markers_basic_style_glyph]
  // [START maps_advanced_markers_basic_style_hide_glyph]
  // Hide the glyph.
  const pinViewNoGlyph = new google.maps.marker.PinView({
    glyph: "",
  });
  const markerViewNoGlyph = new google.maps.marker.AdvancedMarkerView({
    map,
    position: { lat: 37.415, lng: -122.01 },
    content: pinViewNoGlyph.element,
  });
  // [END maps_advanced_markers_basic_style_hide_glyph]
}

window.initMap = initMap;
// [END maps_advanced_markers_basic_style]

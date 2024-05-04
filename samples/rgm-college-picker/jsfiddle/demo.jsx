/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useRef } from "https://cdn.skypack.dev/react@^18.2.0";
import ReactDOM from "https://cdn.skypack.dev/react-dom@^18.2.0/client";
import {
  AdvancedMarker,
  Map,
  Pin,
  APIProvider,
} from "https://cdn.skypack.dev/@vis.gl/react-google-maps@latest";
import * as GMPX from "https://cdn.skypack.dev/@googlemaps/extended-component-library@^0.6.10/react";
const API_KEY = globalThis.GOOGLE_MAPS_API_KEY ?? "YOUR_API_KEY";
const DEFAULT_CENTER = { lat: -34.397, lng: 150.644 };
const DEFAULT_ZOOM = 4;
const DEFAULT_ZOOM_WITH_LOCATION = 16;

/**
 * Sample app that helps users locate a college on the map, with place info such
 * as ratings, photos, and reviews displayed on the side.
 */
const App = () => {
  const overlayLayoutRef = useRef(null);
  const pickerRef = useRef(null);
  const [college, setCollege] = useState(undefined);
  return (
    <div className="App">
      <APIProvider apiKey={API_KEY} version="beta">
        <GMPX.SplitLayout rowReverse rowLayoutMinWidth={700}>
          <div className="SplitLayoutContainer" slot="fixed">
            <GMPX.OverlayLayout ref={overlayLayoutRef}>
              <div className="MainContainer" slot="main">
                <GMPX.PlacePicker
                  className="CollegePicker"
                  ref={pickerRef}
                  forMap="gmap"
                  country={["us", "ca"]}
                  type="university"
                  placeholder="Enter a college in the US or Canada"
                  onPlaceChange={() => {
                    if (!pickerRef.current?.value) {
                      setCollege(undefined);
                    } else {
                      setCollege(pickerRef.current?.value);
                    }
                  }}
                />
                <GMPX.PlaceOverview
                  size="large"
                  place={college}
                  googleLogoAlreadyDisplayed
                >
                  <GMPX.IconButton
                    slot="action"
                    variant="filled"
                    onClick={() => overlayLayoutRef.current?.showOverlay()}
                  >
                    See Reviews
                  </GMPX.IconButton>
                  <GMPX.PlaceDirectionsButton slot="action" variant="filled">
                    Directions
                  </GMPX.PlaceDirectionsButton>
                </GMPX.PlaceOverview>
              </div>
              <div slot="overlay">
                <GMPX.IconButton
                  className="CloseButton"
                  onClick={() => overlayLayoutRef.current?.hideOverlay()}
                >
                  Close
                </GMPX.IconButton>
                <GMPX.PlaceDataProvider place={college}>
                  <GMPX.PlaceReviews />
                </GMPX.PlaceDataProvider>
              </div>
            </GMPX.OverlayLayout>
          </div>
          <div className="SplitLayoutContainer" slot="main">
            <Map
              id="gmap"
              mapId="8c732c82e4ec29d9"
              center={college?.location ?? DEFAULT_CENTER}
              zoom={
                college?.location ? DEFAULT_ZOOM_WITH_LOCATION : DEFAULT_ZOOM
              }
            >
              {college?.location && (
                <AdvancedMarker position={college?.location}>
                  <Pin
                    background={"#FBBC04"}
                    glyphColor={"#000"}
                    borderColor={"#000"}
                  />
                </AdvancedMarker>
              )}
            </Map>
          </div>
        </GMPX.SplitLayout>
      </APIProvider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

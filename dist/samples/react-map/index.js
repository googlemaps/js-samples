// [START maps_react_map]
import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper } from "@googlemaps/react-wrapper";
// [START maps_react_map_app]
const render = (status) => {
  return React.createElement("h1", null, status);
};

const App = () =>
  React.createElement(
    Wrapper,
    { apiKey: "YOUR_API_KEY", render: render },
    React.createElement(Map, { center: { lat: 0, lng: 0 }, zoom: 3 })
  );

const Map = ({ center, zoom }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    }
  }, [ref]);
  return React.createElement("div", {
    ref: ref,
    style: { width: "100%", height: "100%" },
  });
};

// [END maps_react_map_component]
window.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(
    React.createElement(App, null),
    document.getElementById("root")
  );
});

// [START maps_react_map]
import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper } from "@googlemaps/react-wrapper";
import { createCustomEqual } from "fast-equals";
const render = (status) => {
  return React.createElement("h1", null, status);
};

const App = () => {
  // [START maps_react_map_component_app_state]
  const [clicks, setClicks] = React.useState([]);
  const [zoom, setZoom] = React.useState(3); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 0,
    lng: 0,
  });

  const onClick = (e) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };

  // [END maps_react_map_component_app_state]
  const form = React.createElement(
    "div",
    {
      style: {
        padding: "1rem",
        flexBasis: "250px",
        height: "100%",
        overflow: "auto",
      },
    },
    React.createElement("label", { htmlFor: "zoom" }, "Zoom"),
    React.createElement("input", {
      type: "number",
      id: "zoom",
      name: "zoom",
      value: zoom,
      onChange: (event) => setZoom(Number(event.target.value)),
    }),
    React.createElement("br", null),
    React.createElement("label", { htmlFor: "lat" }, "Latitude"),
    React.createElement("input", {
      type: "number",
      id: "lat",
      name: "lat",
      value: center.lat,
      onChange: (event) =>
        setCenter({ ...center, lat: Number(event.target.value) }),
    }),
    React.createElement("br", null),
    React.createElement("label", { htmlFor: "lng" }, "Longitude"),
    React.createElement("input", {
      type: "number",
      id: "lng",
      name: "lng",
      value: center.lng,
      onChange: (event) =>
        setCenter({ ...center, lng: Number(event.target.value) }),
    }),
    React.createElement(
      "h3",
      null,
      clicks.length === 0 ? "Click on map to add markers" : "Clicks"
    ),
    clicks.map((latLng, i) =>
      React.createElement(
        "pre",
        { key: i },
        JSON.stringify(latLng.toJSON(), null, 2)
      )
    ),
    React.createElement("button", { onClick: () => setClicks([]) }, "Clear")
  );
  // [START maps_react_map_component_app_return]
  return React.createElement(
    "div",
    { style: { display: "flex", height: "100%" } },
    React.createElement(
      Wrapper,
      { apiKey: "YOUR_API_KEY", render: render },
      React.createElement(
        Map,
        {
          center: center,
          onClick: onClick,
          onIdle: onIdle,
          zoom: zoom,
          style: { flexGrow: "1", height: "100%" },
        },
        clicks.map((latLng, i) =>
          React.createElement(Marker, { key: i, position: latLng })
        )
      )
    ),
    form
  );
  // [END maps_react_map_component_app_return]
};

const Map = ({ onClick, onIdle, children, style, ...options }) => {
  // [START maps_react_map_component_add_map_hooks]
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  // [END maps_react_map_component_add_map_hooks]
  // [START maps_react_map_component_options_hook]
  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);
  // [END maps_react_map_component_options_hook]
  // [START maps_react_map_component_event_hooks]
  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );
      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);
  // [END maps_react_map_component_event_hooks]
  // [START maps_react_map_component_return]
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", { ref: ref, style: style }),
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // set the map prop on the child component
        return React.cloneElement(child, { map });
      }
    })
  );
  // [END maps_react_map_component_return]
};

// [START maps_react_map_marker_component]
const Marker = (options) => {
  const [marker, setMarker] = React.useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);
  return null;
};

// [END maps_react_map_marker_component]
const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
  if (
    isLatLngLiteral(a) ||
    a instanceof google.maps.LatLng ||
    isLatLngLiteral(b) ||
    b instanceof google.maps.LatLng
  ) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }
  // TODO extend to other types
  // use fast-equals for other objects
  return deepEqual(a, b);
});

function useDeepCompareMemoize(value) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

function useDeepCompareEffectForMaps(callback, dependencies) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

function isLatLngLiteral(obj) {
  return (
    typeof obj === "object" &&
    Number.isFinite(obj.lat) &&
    Number.isFinite(obj.lng)
  );
}

window.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(
    React.createElement(App, null),
    document.getElementById("root")
  );
});
// [END maps_react_map]

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

// [START maps_react_map]
import * as React from "react";
import * as ReactDom from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// [START maps_react_map_app]
const render = (status: Status): JSX.Element => {
  return <h1>{status}</h1>;
};

const App = (): JSX.Element => (
  <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
    <Map center={{ lat: 0, lng: 0 }} zoom={3} />
  </Wrapper>
);
// [END maps_react_map_app]

// [START maps_react_map_component]
const Map = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    }
  }, [ref]);

  return <div ref={ref} style={{ width: "100%", height: "100%" }} />;
};
// [END maps_react_map_component]

window.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.getElementById("root"));
});

// [END maps_react_map]
export {};

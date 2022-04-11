/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  AmbientLight,
  DirectionalLight,
  Matrix4,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "https://cdn.skypack.dev/three@^0.129.0";
import { GLTFLoader } from "https://cdn.skypack.dev/three@^0.129.0/examples/jsm/loaders/GLTFLoader";
let map;
const mapOptions = {
  tilt: 0,
  heading: 0,
  zoom: 18,
  center: { lat: 35.6594945, lng: 139.6999859 },
  mapId: "15431d2b469f209e",
  // disable interactions due to animation loop and moveCamera
  disableDefaultUI: true,
  gestureHandling: "none",
  keyboardShortcuts: false,
};

function initMap() {
  const mapDiv = document.getElementById("map");

  map = new google.maps.Map(mapDiv, mapOptions);
  initWebglOverlayView(map);
}

function initWebglOverlayView(map) {
  let scene, renderer, camera, loader;
  const webglOverlayView = new google.maps.WebGLOverlayView();

  webglOverlayView.onAdd = () => {
    // Set up the scene.
    scene = new Scene();
    camera = new PerspectiveCamera();

    const ambientLight = new AmbientLight(0xffffff, 0.75); // Soft white light.

    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 0.25);

    directionalLight.position.set(0.5, -1, 0.5);
    scene.add(directionalLight);
    // Load the model.
    loader = new GLTFLoader();

    const source =
      "https://raw.githubusercontent.com/googlemaps/js-samples/main/assets/pin.gltf";

    loader.load(source, (gltf) => {
      gltf.scene.scale.set(10, 10, 10);
      gltf.scene.rotation.x = Math.PI; // Rotations are in radians.
      scene.add(gltf.scene);
    });
  };

  webglOverlayView.onContextRestored = ({ gl }) => {
    // Create the js renderer, using the
    // maps's WebGL rendering context.
    renderer = new WebGLRenderer({
      canvas: gl.canvas,
      context: gl,
      ...gl.getContextAttributes(),
    });
    renderer.autoClear = false;
    // Wait to move the camera until the 3D model loads.
    loader.manager.onLoad = () => {
      renderer.setAnimationLoop(() => {
        webglOverlayView.requestRedraw();

        const { tilt, heading, zoom } = mapOptions;

        map.moveCamera({ tilt, heading, zoom });
        // Rotate the map 360 degrees.
        if (mapOptions.tilt < 67.5) {
          mapOptions.tilt += 0.5;
        } else if (mapOptions.heading <= 360) {
          mapOptions.heading += 0.2;
          mapOptions.zoom -= 0.0005;
        } else {
          renderer.setAnimationLoop(null);
        }
      });
    };
  };

  webglOverlayView.onDraw = ({ gl, transformer }) => {
    const latLngAltitudeLiteral = {
      lat: mapOptions.center.lat,
      lng: mapOptions.center.lng,
      altitude: 100,
    };
    // Update camera matrix to ensure the model is georeferenced correctly on the map.
    const matrix = transformer.fromLatLngAltitude(latLngAltitudeLiteral);

    camera.projectionMatrix = new Matrix4().fromArray(matrix);
    webglOverlayView.requestRedraw();
    renderer.render(scene, camera);
    // Sometimes it is necessary to reset the GL state.
    renderer.resetState();
  };

  webglOverlayView.setMap(map);
}

window.initMap = initMap;

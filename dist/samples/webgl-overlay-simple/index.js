// [START maps_webgl_overlay_simple]
// [START maps_webgl_overlay_simple_init_map]
import {
  AmbientLight,
  DirectionalLight,
  Matrix4,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
let map;
const mapOptions = {
  tilt: 0,
  heading: 0,
  zoom: 18,
  center: { lat: 35.6594945, lng: 139.6999859 },
  mapId: "15431d2b469f209e",
};

function initMap() {
  const mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOptions);
  initWebglOverlayView(map);
}

// [END maps_webgl_overlay_simple_init_map]
// [START maps_webgl_overlay_simple_on_add]
function initWebglOverlayView(map) {
  let scene, renderer, camera, loader;
  const webglOverlayView = new google.maps.WebglOverlayView();

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
      "https://raw.githubusercontent.com/googlemaps/js-samples/master/assets/pin.gltf";
    loader.load(source, (gltf) => {
      gltf.scene.scale.set(10, 10, 10);
      gltf.scene.rotation.x = Math.PI; // Rotations are in radians.
      scene.add(gltf.scene);
    });
  };

  // [END maps_webgl_overlay_simple_on_add]
  // [START maps_webgl_overlay_simple_on_context_restored]
  webglOverlayView.onContextRestored = (gl) => {
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

  // [END maps_webgl_overlay_simple_on_context_restored]
  // [START maps_webgl_overlay_simple_on_draw]
  webglOverlayView.onDraw = (gl, transformer) => {
    // Update camera matrix to ensure the model is georeferenced correctly on the map.
    const matrix = transformer.fromLatLngAltitude(mapOptions.center, 120);
    camera.projectionMatrix = new Matrix4().fromArray(matrix);
    webglOverlayView.requestRedraw();
    renderer.render(scene, camera);
    // Sometimes it is necessary to reset the GL state.
    renderer.resetState();
  };
  // [END maps_webgl_overlay_simple_on_draw]
  // [START maps_webgl_overlay_simple_add_to_map]
  webglOverlayView.setMap(map);
  // [END maps_webgl_overlay_simple_add_to_map]
}
// [END maps_webgl_overlay_simple]

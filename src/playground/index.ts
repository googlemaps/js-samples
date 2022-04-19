import "./google-maps-sample";

// load config from url params
const config = new URL(document.location.href).searchParams;

// instantiate the custom element
const samplePlayground = document.createElement("google-maps-sample");

// get ?sample=<sample>
samplePlayground.projectSrc = `./${config.get(
  "sample"
)!}/playground/playground.ts.json`;

samplePlayground.name = config.get("sample")!;

// hide the code if ?hideCode=true
if (config.get("hideCode")) {
  samplePlayground.hideCode = true;
}

// show the buttons toolbar if ?showToolbar=true
if (config.get("showToolbar") && config.get("showToolbar") === "true") {
  samplePlayground.showToolbar = true;
}

if (config.has("previewHeight")) {
  samplePlayground.previewHeight = config.get("previewHeight")!;
}

// append the playground to the body
document.body.append(samplePlayground);

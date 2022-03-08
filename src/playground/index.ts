import "./google-maps-sample";

// load config from url params
const config = new URL(document.location.href).searchParams;

// instantiate the custom element
const samplePlayground = document.createElement("google-maps-sample");

// get ?sample=<sample>
samplePlayground.projectSrc = `./${config.get("sample")!}/playground/playground.ts.json`;

// hide the code if ?hideCode=true
if (config.get("hideCode")) {
  samplePlayground.hideCode = true;
}

if (config.has("previewHeight")) {
  samplePlayground.previewHeight = config.get("previewHeight")!;
}

// append the playground to the body
document.body.append(samplePlayground);

![Build](https://github.com/googlemaps/js-samples/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/js-samples/workflows/Release/badge.svg)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-samples)
![Apache-2.0](https://img.shields.io/badge/license-Apache-blue)

# js-samples

## Description

Samples for the Google Maps JavaScript API.

**[View the samples](https://googlemaps.github.io/js-samples/dist/)**

**Note::** Many of these samples were written in 2010-2012. Many are still functional and are in the samples folder.

## Development

### Build

1. Use Bazel to build `bazel build ...` or `bazel build //samples/add-map/...`
1. Update dist `bazel build public.tar` and `tar xf bazel-bin/public.tar -C dist`

### Test

1. Use Bazel to run tests with `bazel test ...`
1. Run the dist diff tests `bazel test dist:diff`
1. Run e2e tests `npx selenium-standalone install && npx selenium-standalone start` and then run `bazel test e2e:e2e`

### Run

1. Set the environment variable `export GOOGLE_MAPS_JS_SAMPLES_KEY=YOUR_KEY`.
1. Start a server with all samples using `bazel run serve`.

## Inputs and outputs

The following table identifies the inputs and outputs.

| File                          | Edit | Description                                        |     |
| ----------------------------- | ---- | -------------------------------------------------- | --- |
| samples/\*/src/index.js       | Y    | JavaScript for sample                              |
| samples/\*/src/index.njk      | Y    | HTML template for sample                           |
| samples/\*/src/style.scss     | Y    | SCSS style for sample                              |
| shared/layout.njk             | Y    | Shared HTML template to extend                     |
| shared/scss/\*                | Y    | Shared SCSS styles                                 |
| dist/samples/\*/app.js        | N    | Transpiled JS                                      |
| dist/samples/\*/index.html    | N    | Inline HTML, CSS, JS with development key          |
| dist/samples/\*/iframe.html    | N    | Inline HTML, CSS, JS for iframe without html, head, body tags       |
| dist/samples/\*/jsfiddle.html | N    | HTML without CSS or JS                             |
| dist/samples/\*/sample.html   | N    | HTML without CSS or JS with template var for key   |
| dist/samples/\*/style.css     | N    | CSS output from SCSS                               |

## Other Resources

- [Google Maps Documentation](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Google Maps Reference Documenations](https://developers.google.com/maps/documentation/javascript/reference/)
- [Google Maps Typings](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/googlemaps) - Community supported `npm i -D @types/googlemaps`
- [Google Maps Utilitiies](https://github.com/googlemaps/v3-utility-library)

## Support

These libraries are community supported. We're comfortable enough with the stability and features of
the libraries that we want you to build real production applications on it.

If you find a bug, or have a feature suggestion, please [log an issue][issues]. If you'd like to
contribute, please read [How to Contribute][contrib].

![Build](https://github.com/googlemaps/js-samples/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/js-samples/workflows/Release/badge.svg)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-samples)
![Apache-2.0](https://img.shields.io/badge/license-Apache-blue)

# js-samples

## Description

Samples for the Google Maps JavaScript API.

The samples can be demoed on the [GitHub demo page](https://googlemaps.github.io/js-samples/dist/) or at the [official documentation site](https://developers.google.com/maps/documentation/javascript/examples).

## Initialize an app from a sample
```
# install the package
npm i -g @googlemaps/js-samples

# extract a sample to a destination folder
googlemaps-js-samples init map-simple destFolder

# run the sample
cd destFolder
npm i
npm run dev
```

Replace `map-simple` with the path to another sample in this repository.

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

| File                          | Edit | jsFiddle | Description                                                                                     |
| ----------------------------- | ---- | -------- | ----------------------------------------------------------------------------------------------- |
| samples/\*/src/index.js       | Y    | N        | JavaScript for sample for *JS* tab                                                              |
| samples/\*/src/index.njk      | Y    | N        | HTML template for sample                                                                        |
| samples/\*/src/style.scss     | Y    | N        | SCSS style for sample                                                                           |
| shared/layout.njk             | Y    | N        | Shared HTML template to extend                                                                  |
| shared/scss/\*                | Y    | N        | Shared SCSS styles                                                                              |
| dist/samples/\*/app.js        | N    | Y        | Transpiled JS for >3%                                                                           | 
| dist/samples/\*/index.html    | N    | N        | Inline HTML, CSS, JS with development key and transpiled for >1%, ie11                          |
| dist/samples/\*/iframe.html   | N    | N        | Inline HTML, CSS, JS for iframe without html, head, body tags transpiled for ie11 and >1%, ie11 |
| dist/samples/\*/inline.html   | N    | N        | Inline HTML, CSS, JS for *All* tab transpiled for >3%                                           |
| dist/samples/\*/jsfiddle.html | N    | Y        | HTML without CSS or JS for in jsFiddle                                                          |
| dist/samples/\*/sample.html   | N    | N        | HTML without CSS or JS for *HTML* tab                                                           |
| dist/samples/\*/style.css     | N    | Y        | CSS output from SCSS for *CSS* tab                                                              |

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

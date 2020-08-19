# Google Maps JavaScript API Loader

[![npm](https://img.shields.io/npm/v/@googlemaps/js-api-loader)](https://www.npmjs.com/package/@googlemaps/js-api-loader)
![Build](https://github.com/googlemaps/js-api-loader/workflows/Build/badge.svg)
![Release](https://github.com/googlemaps/js-api-loader/workflows/Release/badge.svg)
[![codecov](https://codecov.io/gh/googlemaps/js-api-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/googlemaps/js-api-loader)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-api-loader?color=green)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Description
Load the Google Maps JavaScript API script dynamically. This takes inspiration from the [google-maps](https://www.npmjs.com/package/google-maps) npm package but updates it with ES6, Promises, and TypeScript.

A previous version of the package was available at [@googlemaps/loader](https://www.npmjs.com/package/@googlemaps/loader) but was renamed to the package [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader) here.

## Install

Available via npm as the package [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader).

`npm i @googlemaps/js-api-loader`

or

`yarn add @googlemaps/js-api-loader`

Alternativly you may add the umd package directly to the html document using the unpkg link.

`<script src="https://unpkg.com/@googlemaps/js-api-loader@1.0.0/dist/index.min.js"></script>`

When adding via unpkg, the loader can be accessed at `google.maps.plugins.loader.Loader`.

## Documentation

The reference documentation can be found at this [link](https://googlemaps.github.io/js-api-loader/docs/index.html). The Google Maps JavaScript API [documentation](https://developers.google.com/maps/documentation/javascript/tutorial) is the authoritative source for the loader options.


## Example

``` javascript
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

```
Using a promise for when the script has loaded.
``` javascript
// Promise
loader
  .load()
  .then(() => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(e => {
    // do something
  });
```

Alternatively, if you want to use a callback.
``` javascript
// Callback
loader.loadCallback(e => {
  if (e) {
    console.log(e);
  } else {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  }
});

```

View the package in action [here](https://googlemaps.github.io/js-api-loader/examples/index.html).


## Support

This library is community supported. We're comfortable enough with the stability and features of
the library that we want you to build real production applications on it.

If you find a bug, or have a feature suggestion, please [log an issue][issues]. If you'd like to
contribute, please read [How to Contribute][contrib].

[issues]: https://github.com/googlemaps/js-api-loader/issues
[contrib]: https://github.com/googlemaps/js-api-loader/blob/master/packages/loader/CONTRIBUTING.md

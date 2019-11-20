[![Build Status](https://travis-ci.org/googlemaps/js-samples.svg?branch=master)](https://travis-ci.org/googlemaps/js-samples)
![GitHub contributors](https://img.shields.io/github/contributors/googlemaps/js-samples)
![Apache-2.0](https://img.shields.io/badge/license-Apache-blue)

js-samples
==========

## Description
Samples for the Google Maps JavaScript API.

**[View the samples](https://geo-devrel-259418.firebaseapp.com/)**

**Note::** Many of these samples were written in 2010-2012. Many are still functional and are in the samples folder. Others that do not run have been moved to archive.

## Development
**Note**: The default branch for this repo is dev and **not** master.

Start a server that will reload as built files change.

```
npm run serve
```

Build files as they change using one of these options:
1. Limited to a single sample: `lerna --scope circle-simple run build:watch`
2. Building all samples on change: `npm run build:watch`
3. Limited to matching scope: `lerna --scope control-* --concurrency 16 run build:watch` Requires a concurrency value > # of samples.

Alternatively, `npm run serve:watch` can be called to wrap `npm run serve` and `npm build:watch`.

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

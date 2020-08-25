# Run geocoding-reverse in Google Cloud Shell

## Introduction

This tutorial will walk through the process of running a web application from the geocoding-reverse using TypeScript, Babel, and Webpack.

## Install the `@googlemaps/js-samples` cli tool

The following package will be used to load the sample skeleton and can be installed by entering the following in the shell:

```
npm i -g '@googlemaps/js-samples'
```

## Initialize the sample application

After installation is complete, the following command will be used to actually extract the sample contents into the current directory.

```
googlemaps-js-samples init -v --no-open --no-hot geocoding-reverse .
```

The command can also be run outside of the Cloud Shell.

## Install and run the application

To install the application and its requirements, run the following command.

```
npm i
```

After installation, Webpack can be called using the following command.

```
npm run dev
```

For configuration of Webpack, check <walkthrough-editor-open-file filePath="webpack.dev.js">webpack.dev.js</walkthrough-editor-open-file>, <walkthrough-editor-open-file filePath="webpack.prod.js">webpack.prod.js</walkthrough-editor-open-file>, and <walkthrough-editor-open-file filePath="webpack.common.js">webpack.common.js</walkthrough-editor-open-file>.

## Enable Web Preview in the Google Cloud Shell

* Once your app is built (should take a few minutes), you can launch it via
    <walkthrough-spotlight-pointer target="cloudshell" spotlightId="devshell-web-preview-button">Web
    Preview button</walkthrough-spotlight-pointer> using the port 8080.

* Keep this extra tab open for now, since we'll be soon modifying our
    application.

## Update the Google Maps API key 

The application is currently using the <walkthrough-editor-open-file filePath=".env">.env</walkthrough-editor-open-file> file to embed the API key in the
HTML document. This is a temporary key and is not valid for production usage. 


The key can be replaced by following these instructions to
[get an api key](https://developers.google.com/maps/documentation/javascript/get-api-key).

After changing the key, the Webpack server must be restarted with the following command:

```
npm run dev
```

## Inspect and edit the application files

There are three main files for this sample:

* <walkthrough-editor-open-file filePath="src/index.ts">src/index.ts</walkthrough-editor-open-file>
* <walkthrough-editor-open-file filePath="static/index.html">static/index.html</walkthrough-editor-open-file>
* <walkthrough-editor-open-file filePath="public/style.css">public/style.css</walkthrough-editor-open-file>

## Conclusion

<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Congratulations! You've just run a web application using the Google Maps Platform JS API.
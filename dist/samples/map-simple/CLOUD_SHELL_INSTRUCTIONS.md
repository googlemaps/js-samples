# Run the `map-simple` sample in Google Cloud Shell

<walkthrough-tutorial-duration duration="10"/>

## Introduction

This tutorial will walk through the process of running a web application from
the `map-simple` sample using TypeScript, Babel, and Webpack.

For feedback related to this sample, please open a new issue on
[GitHub](https://github.com/googlemaps/js-samples/issues).

Click the **Start** button to continue.

## Install and run the application

Open Cloud Shell by clicking the
<walkthrough-cloud-shell-icon></walkthrough-cloud-shell-icon> button in the
navigation bar in the upper-right corner of the console.

To install the application and its requirements, run the following command.

```bash
npm i
```

After installation, Webpack can be called using the following command.

```bash
npm start
```

For configuration of Webpack, check
<walkthrough-editor-open-file filePath="webpack.config.js">webpack.config.js</walkthrough-editor-open-file>.

## Enable Web Preview in the Google Cloud Shell

Once your app is built (should take a few moments), you can launch it via
<walkthrough-spotlight-pointer target="cloudshell" spotlightId="devshell-web-preview-button">Web
Preview button</walkthrough-spotlight-pointer> using the **port 8080**.

## Update the Google Maps API key

The application is currently using the
<walkthrough-editor-open-file filePath=".env">.env</walkthrough-editor-open-file>
file to embed the API key in the HTML document. This is a temporary key and is
not valid for production usage.

The key can be replaced by following these instructions to
[get an api key](https://developers.google.com/maps/documentation/javascript/get-api-key).

After changing the key, the Webpack server must be restarted with the following
command:

```bash
npm start
```

## Inspect and edit the application files

There are three main files for this sample:

*   <walkthrough-editor-open-file filePath="src/index.ts">src/index.ts</walkthrough-editor-open-file>
*   <walkthrough-editor-open-file filePath="src/index.html">src/index.html</walkthrough-editor-open-file>
*   <walkthrough-editor-open-file filePath="src/style.css">src/style.css</walkthrough-editor-open-file>

Try editing the <walkthrough-editor-open-file filePath="src/index.ts">src/index.ts</walkthrough-editor-open-file> file and see how the web application in the web preview immediately reloads with the changes.

## Conclusion

<walkthrough-conclusion-trophy></walkthrough-conclusion-trophy>

Congratulations! You've just launched a web application using the Google Maps
Platform JS API.

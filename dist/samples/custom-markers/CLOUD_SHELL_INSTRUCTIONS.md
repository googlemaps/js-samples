# Run custom-markers in Google Cloud Shell

The samples in this repository can be run in Google Cloud Shell for interactive
debugging and exploration.

# Install the `@googlemaps/js-samples` cli tool

```
npm i -g '@googlemaps/js-samples'
```

# Initialize the sample application

```
googlemaps-js-samples init -v --no-open custom-markers ~/custom-markers
```

The command loads the skeleton application, changes to the destination directory(~/custom-markers), and runs `npm i` followed by `npm run dev`.

# Enable Web Preview in the Google Cloud Shell

The [Web Preview](https://cloud.google.com/shell/docs/using-web-preview) button <img src="https://cloud.google.com/shell/docs/images/web_preview.svg" alt="Web Preview Button">
can be found on the top right of the Cloud Shell taskbar.

Select `Preview on port 8080`.

# Update the Google Maps API key 

The application is currently using the `.env` file to embed the API key in the
HTML document. This is a temporary key and is not valid for production usage. 

The key can be replaced by following these instructions to
[get an api key](https://developers.google.com/maps/documentation/javascript/get-api-key).

# Feedback

For feedback related to this sample, please open a new issue on
[GitHub](https://github.com/googlemaps/js-samples/issues).

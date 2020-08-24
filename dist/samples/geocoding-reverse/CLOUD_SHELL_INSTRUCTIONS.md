# Run geocoding-reverse in Google Cloud Shell

The samples in this repository can be run in Google Cloud Shell for interactive
debugging and exploration.

# Quickstart

1.  Install the `@googlemaps/js-samples` cli tool.

    ```
    npm i -g '@googlemaps/js-samples'
    ```

1.  Initialize the sample application. `googlemaps-js-samples init -v --no-open
    geocoding-reverse ~/geocoding-reverse`

1.  Enable `Web Preview` in the Google Cloud Shell toolbar

1.  Update the Google Maps API key in the `.env` file.

The application is currently using the `.env` file to embed the API key in the
HTML document. This is a temporary key and is not valid for production usage. It
can be replaced by following these instructions to
[get an api key](https://developers.google.com/maps/documentation/javascript/get-api-key).

# Feedback

For feedback related to this sample, please open a new issue on
[GitHub](https://github.com/googlemaps/js-samples/issues).

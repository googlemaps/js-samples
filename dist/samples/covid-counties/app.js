(function(exports) {
  "use strict";

  /* eslint-disable no-undef */
  // Initialize and add the map
  let dt = "2020-05-20";

  async function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 39,
        lng: -99
      },
      zoom: 4
    });
    const countyFipsIndex = {};
    await fetch(
      "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv"
    )
      .then(response => {
        return response.text();
      })
      .then(text =>
        text
          .split(/\r\n|\n/)
          .slice(1)
          .forEach(line => {
            const [date, fips, cases, deaths] = line.split(",");
            countyFipsIndex[fips] = countyFipsIndex[fips] || {};
            countyFipsIndex[fips][date] = {
              cases,
              deaths
            };
          })
      );
    const color = d3
      .scaleLinear()
      .domain([0, 1000, 10000])
      .range(["green", "orange", "red"]);
    const deckOverlay = new deck.GoogleMapsOverlay({
      layers: [
        new deck.GeoJsonLayer({
          id: "counties",
          data:
            "https://raw.githubusercontent.com/googlemaps/js-samples/a4652892d41ae2316ee30f33e58cdf712592faf1/samples/covid-counties/data/counties.json",
          filled: true,
          opacity: 0.8,
          pointRadiusScale: 0.3,
          getFillColor: f => {
            const fipsKey = f.properties.fips.toString();

            if (countyFipsIndex[fipsKey] && countyFipsIndex[fipsKey][dt]) {
              const { r, g, b, a } = d3.rgb(
                color(countyFipsIndex[f.properties.fips][dt].cases)
              );
              return [r, g, b, a];
            }

            return [0, 0, 0, 0];
          },
          lineWidthUnits: "pixels",
          autoHighlight: true,
          onDataLoad: _ => {
            progress.done(); // hides progress bar
          }
        })
      ]
    });
    deckOverlay.setMap(map);
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));

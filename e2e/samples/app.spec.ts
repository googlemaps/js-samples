import { test, expect } from "@playwright/test";
import { waitForGoogleMapsToLoad, failOnPageError } from "../utils";
import fs from "fs";
import child_process from "child_process";

import util from "util";
const execAsync = util.promisify(child_process.exec);

const samples = fs
  .readdirSync("samples", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  // TODO: remove this once the samples are fixed
  .filter(
    (name) =>
      ![
        "deckgl-arclayer",
        "deckgl-points",
        "deckgl-tripslayer",
        "event-poi",
        "marker-clustering",
        "places-autocomplete-multiple-countries",
        "programmatic-load-button", // requires specific input from user
        "react-map",
        "store-locator", // hits over query Limit
      ].includes(name)
  );

test.describe.parallel("sample applications", () => {
  samples.forEach((sample) => {
    test.describe(sample, () => {
      test(`app builds`, async ({ page }) => {
        test.setTimeout(30000);
        failOnPageError(page);

        await execAsync(
          `cd dist/samples/${sample}/app && npm i && npm run build`
        );

        // go to page and fail if errors
        await page.goto(`/samples/${sample}/app/dist`, {
          waitUntil: "networkidle",
        });

        // wait for google.maps to be loaded
        await waitForGoogleMapsToLoad(page);
      });
    });
  });
});

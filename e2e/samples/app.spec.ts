import { test, expect } from "@playwright/test";
import { waitForGoogleMapsToLoad, failOnPageError } from "../utils";
import fs from "fs";
import child_process from "child_process";

import util from "util";
const execAsync = util.promisify(child_process.exec);

export const BROKEN_APP_SAMPLES = [
  "store-locator", // Distance Matrix Service: You have exceeded your rate-limit for this API.
];

const samples = fs
  .readdirSync("samples", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => !BROKEN_APP_SAMPLES.includes(name));

test.describe.parallel("sample applications", () => {
  samples.forEach((sample) => {
    test.describe(sample, () => {
      test.beforeAll(async () => {
        test.setTimeout(60000);
        await execAsync(
          `cd dist/samples/${sample}/app && npm i && npm run build`
        );
      });

      test(`app loads without error`, async ({ page }) => {
        test.slow();
        failOnPageError(page);

        // go to page and fail if errors
        await page.goto(`/samples/${sample}/app/dist`, {
          waitUntil: "networkidle",
        });

        if (sample === "programmatic-load-button") {
          await page.locator("button").click();
        }

        // wait for google.maps to be loaded
        await waitForGoogleMapsToLoad(page);
      });
    });
  });
});

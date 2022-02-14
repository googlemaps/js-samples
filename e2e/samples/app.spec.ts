import { test, expect } from "@playwright/test";
import { waitForPlaygroundPreviewToLoad, failOnPageError } from "../utils";
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
        "event-poi",
        "marker-clustering",
        "places-autocomplete-multiple-countries",
        "react-map",
      ].includes(name)
  );

test.describe.parallel("sample applications", () => {
  samples.forEach((sample) => {
    test.describe(sample, () => {
      test(`app builds`, async ({ page }) => {
        test.setTimeout(60000);
        await execAsync(
          `cd dist/samples/${sample}/app && npm i && npm run build`
        );
        await page.goto(`/samples/${sample}/app`);
      });
    });
  });
});

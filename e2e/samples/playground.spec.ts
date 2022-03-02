import { test, expect } from "@playwright/test";
import { waitForPlaygroundPreviewToLoad, failOnPageError } from "../utils";
import fs from "fs";

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
        "map-sync",
        "marker-clustering",
        "move-camera-ease",
        "places-autocomplete-service",
        "programmatic-load",
        "react-map",
        "store-locator",
        "map-puzzle", // non deterministic
      ].includes(name)
  );

test.describe.parallel("suite", () => {
  samples.forEach((sample) => {
    test(`playground screenshots match - ${sample}`, async ({
      page,
    }) => {
      test.setTimeout(30000);
      failOnPageError(page);

      await page.goto(`/samples/playground.html?sample=${sample}`);
      await waitForPlaygroundPreviewToLoad(page);
      await page.waitForTimeout(1000);
      await page.waitForLoadState("networkidle");

      expect(await page.locator("playground-preview").screenshot()).toMatchImageDiff({ name: `${sample}-preview.png` });
      expect(await page.locator("#code").screenshot()).toMatchImageDiff({ name: `${sample}-code.png` });
    });
  });
});

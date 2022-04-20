import { test, expect } from "@playwright/test";
import {
  waitForPlaygroundPreviewToLoad,
  failOnPageError,
  NONDETERMINISTIC_SAMPLES,
  SAMPLES_NEEDING_EXTRA_DELAY,
} from "../utils";
import fs from "fs";

export const BROKEN_PLAYGROUND_SAMPLES = [
  "react-map", // requires jsx support
  "store-locator", // Distance Matrix Service: You have exceeded your rate-limit for this API.
];

const samples = fs
  .readdirSync("samples", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  // TODO: remove this once the samples are fixed
  .filter((name) => !BROKEN_PLAYGROUND_SAMPLES.includes(name));

test.describe.parallel("playground screenshot tests", () => {
  samples.forEach((sample) => {
    test(sample, async ({ page }) => {
      test.setTimeout(30000);
      failOnPageError(page);

      await page.goto(`/samples/playground.html?sample=${sample}`);
      await page.setViewportSize({
        width: 800,
        height: 800,
      });
      await waitForPlaygroundPreviewToLoad(page);
      await page.waitForTimeout(
        1000 * (SAMPLES_NEEDING_EXTRA_DELAY.includes(sample) ? 5 : 1)
      );
      await page.waitForLoadState("networkidle");

      if (!NONDETERMINISTIC_SAMPLES.includes(sample)) {
        expect(
          await page.locator("google-maps-sample").screenshot()
        ).toMatchImageDiff({ name: `${sample}.png` });
      }
    });
  });
});

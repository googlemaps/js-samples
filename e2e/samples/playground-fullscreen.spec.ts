import { test, expect } from "@playwright/test";
import { waitForPlaygroundPreviewToLoad, failOnPageError } from "../utils";

test("fullscreen", async ({ page }) => {
  test.setTimeout(30000);
  failOnPageError(page);
  const sample = "map-simple";

  await page.setViewportSize({ width: 1200, height: 800 });

  await page.goto(`/samples/playground.html?sample=${sample}&showToolbar=true`);
  await page.click("#toggle-fullscreen");

  await waitForPlaygroundPreviewToLoad(page);
  await page.waitForTimeout(1000);
  await page.waitForLoadState("networkidle");

  expect(await page.locator("#playground").screenshot({})).toMatchImageDiff({
    name: `${sample}.png`,
  });
});

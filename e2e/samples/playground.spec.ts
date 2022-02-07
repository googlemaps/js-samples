import { test, expect } from "@playwright/test";
import { waitForPlaygroundPreviewToLoad, failOnPageError } from "../utils";
import fs from "fs";

const samples = fs
  .readdirSync("samples", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

samples.forEach((sample) => {
  // test(`playground preview screenshot - ${sample}`, async ({ page }) => {
  //   await page.goto(`/samples/${sample}`);
  //   await waitForPlaygroundPreviewToLoad(page);

  //   const preview = page.locator("playground-preview");
  //   expect(await preview.screenshot()).toMatchSnapshot(`samples/${sample}.png`)
  // });

  test(`playground preview runs without error - ${sample}`, async ({ page }) => {
    failOnPageError(page)

    await page.goto(`/samples/${sample}`);
    await waitForPlaygroundPreviewToLoad(page);
  });
});

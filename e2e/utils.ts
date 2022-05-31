import { Page } from "@playwright/test";

// from https://github.com/lit/lit.dev/blob/5d79d1e0989e68f8b5905e5271229ffe4c55265c/packages/lit-dev-tests/src/playwright/util.ts
export async function waitForPlaygroundPreviewToLoad(page: Page) {
  // We could get a series of iframe reloads, e.g. if we're typing multiple
  // characters, then there could be enough time for multiple previews to get
  // queued up inbetween each keystroke. Assume we've settled when we haven't
  // had an iframe load event for some period of time.
  const iframe = await page.waitForSelector("playground-preview iframe");
  await page.waitForFunction(async (iframe) => {
    const settleTime = 1000;
    await new Promise<void>((resolve) => {
      let timer = setTimeout(resolve, settleTime);
      iframe.addEventListener("load", () => {
        clearTimeout(timer);
        timer = setTimeout(resolve, settleTime);
      });
    });
    return true;
  }, iframe);
  // Hide the animated loading indicator.
  await page.evaluate((el) => {
    el.style.visibility = "hidden";
  }, await page.waitForSelector('playground-preview [part="preview-loading-indicator"]', { state: "attached" }));
}

export async function waitForGoogleMapsToLoad(page: Page) {
  await page.waitForFunction(() => window.google && window.google.maps);
  await page.waitForTimeout(100);
}

export const failOnPageError = (page: Page) => {
  page.on("pageerror", (e) => {
    console.error(e.message);
    process.emit("uncaughtException", e);
  });
};

export const NONDETERMINISTIC_SAMPLES = [
  "move-camera-ease", // camera always moving
  "map-puzzle", // random puzzle placement
  "map-coordinates",
  "deckgl-tripslayer", // always in motion polylines
  "layer-traffic", // traffic changes
  // local context samples don't always show sidebar immediately
  "local-context-basic",
  "local-context-events",
  "local-context-home",
  "local-context-restrictions",
  "local-context-styles",
];

export const SAMPLES_NEEDING_EXTRA_DELAY = [
  "directions-complex", // allow for extra time to calculate and render directions
];

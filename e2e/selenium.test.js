/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require("path");
const webdriver = require("selenium-webdriver");
const glob = require("glob");

jest.setTimeout(30000);
let driver;

beforeAll(async () => {
  const server = `http://localhost:4444/wd/hub`;

  switch (process.env.BROWSER || "chrome") {
    case "chrome": {
      driver = new webdriver.Builder()
        .usingServer(server)
        .withCapabilities({
          browserName: "chrome"
        })
        .build();
      break;
    }
    case "firefox": {
      driver = new webdriver.Builder()
        .usingServer(server)
        .withCapabilities({
          browserName: "firefox"
        })
        .build();
      break;
    }
  }
});

afterAll(async () => {
  await driver.quit();
});

describe("sample %s should be correct", () => {
  const f = glob.sync(
    path.resolve(__dirname, "..", "samples", "**/index.html")
  )[0];

  test("loads map without error in logs", async () => {
    await driver.get("file://" + f);

    await driver.wait(
      async () =>
        await driver.executeScript(
          "return window.google && window.google.maps"
        ),
      5000
    );

    await driver.sleep(1000);

    const logs = await driver
      .manage()
      .logs()
      .get("browser");

    expect(logs.filter(l => l.level.name_ === "SEVERE")).toEqual([]);

  });
});

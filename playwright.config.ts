import { PlaywrightTestConfig, devices } from "@playwright/test";
const config: PlaywrightTestConfig = {
  testDir: "e2e",
  retries: 2,
  timeout: process.env.CI ? 10000 : 5000,
  workers: process.env.CI ? 2 : undefined,
  use: {
    viewport: {
      width: 600,
      height: 1200,
    },
    baseURL: "http://localhost:8000/",
  },
  webServer: {
    command: "npm run serve",
    port: 8000,
  },
  updateSnapshots: "none",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  reporter: process.env.CI ? "github" : "list",
};
export default config;

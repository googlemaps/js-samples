import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  testDir: "e2e",
  timeout: process.env.CI ? 30000 : 10000,
  workers: process.env.CI ? 1 : undefined,
  use: {
    viewport: {
      width: 600,
      height: 1200,
    },
     baseURL: 'http://localhost:8000/',
  },
     webServer: {       
       command: 'npm run serve',
       port: 8000,
     },
  updateSnapshots: "none",
};
export default config;

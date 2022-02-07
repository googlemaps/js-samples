import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  testDir: "e2e",
  use: {
    viewport: {
      width: 600,
      height: 1200,
    },
     baseURL: 'http://localhost:8000/',
  },
     webServer: {
       command: 'npm start',
       port: 8000,
     },
  updateSnapshots: "none",
};
export default config;

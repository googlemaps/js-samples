import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  testDir: "e2e",
  timeout: 10000,
  workers: 1,
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

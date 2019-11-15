const liveServer = require("live-server");

const params = {
  port: 8080,
  open: false,
  file: "index.html",
  wait: 500,
  logLevel: 1,
  watch: ["samples/**/dist/*", "dist/*", "index.html"]
};
liveServer.start(params);

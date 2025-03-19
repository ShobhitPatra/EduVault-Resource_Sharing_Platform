import express from "express";
import http from "http";

const PORT = 9000;
const app = express();
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log(`web socket server is running on port ${PORT}`);
});

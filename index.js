const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const setupSocket = require("./socket");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: true },
});
setupSocket(io);
server.listen(PORT,"0.0.0.0", () =>
  console.log(`Global chat server running on PORT : ${PORT}`)
);



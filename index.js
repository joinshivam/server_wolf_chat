// index.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const setupSocket = require("./socket");
require("dotenv").config();
const PORT = process.env.SERVER_PORT || 5000;

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: process.env.ORIGIN || "*" },
});

setupSocket(io);

server.listen(PORT, () =>
  console.log(`Global chat server running on PORT : ${PORT}`)
);

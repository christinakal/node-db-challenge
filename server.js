const express = require('express');
const server = express();

server.use(express.json());
server.get("/", (req, res) => res.send("<h1>Welcome to this sprint challenge!</h1>"));

module.exports = server;
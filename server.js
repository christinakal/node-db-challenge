const express = require("express");
const server = express();

const ProjectsRouter = require("./projects/projects-router.js");

server.use(express.json());
server.get("/", (req, res) =>
  res.send("<h1>Welcome to this sprint challenge!</h1>")
);
server.use("/api/projects", ProjectsRouter);

module.exports = server;

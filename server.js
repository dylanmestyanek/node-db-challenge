const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const projectsRouter = require('./routes/projects-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => res.send("Yo! This is lit!"));

module.exports = server;
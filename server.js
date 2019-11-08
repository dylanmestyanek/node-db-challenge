const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.get("/", (req, res) => res.send("Yo! This is lit!"));

module.exports = server;
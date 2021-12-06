const express = require('express');

const server = express();

server.use(express.json());

// test endpoint
server.get('/', (req, res)=> {
    res.status(200).json('Hello World')
})


module.exports = server;
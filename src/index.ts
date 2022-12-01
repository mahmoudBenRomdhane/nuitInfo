const { port, env } = require('./config/vars');

const http = require('http');
const app = require('./config/express');


const mongoose = require('./config/mongoose');

mongoose.connect();

const options = {};
const server = http.createServer(options, app);



server.listen(3010, () => {
  console.info(` --- http://localhost:${port}`);
});


module.exports = app;

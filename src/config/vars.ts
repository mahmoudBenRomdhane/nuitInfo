export {};
const path = require('path');

// require('dotenv-safe').load({
//     path: path.join(__dirname, '../../.env'),
//     allowEmptyValues: true
//   });
require('dotenv').config({path : path.join(__dirname, '../../.env')})
const env = process.env; 

module.exports = {
    port: env.PORT,
    mongo:  env.MONGO_URI,
  };

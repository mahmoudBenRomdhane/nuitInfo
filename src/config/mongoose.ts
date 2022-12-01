export {};
const mongoose = require('mongoose');
const { mongo } = require('./vars');


mongoose.Promise = Promise;

mongoose.set('debug', true);

mongoose.connection.on('error', (err: any) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

exports.connect = () => {
  mongoose.connect("mongodb+srv://nuitinfo:nuit1234@cluster0.7l8yo.mongodb.net/?retryWrites=true&w=majority", {
    keepAlive: 1,
    useNewUrlParser: true
  });
  return mongoose.connection;
};

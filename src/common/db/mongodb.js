const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../config');
const logger = require('../logging/logger');

const connectToDB = () => {
  // mongoose
  //   .connect(MONGO_CONNECTION_STRING, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   })
  //   .catch((err) => logger.error(err.message));
  //
  // const db = mongoose.connection;
  // db.once('open', () => {
  //   logger.info('Mongo connection successfully!');
  // });
};

module.exports = { connectToDB };

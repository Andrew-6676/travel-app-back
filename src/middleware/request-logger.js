const morgan = require('morgan');
const logger = require('../common/logging/logger');

const format = process.env.NODE_ENV === 'production' ? 'short' : 'dev';
const options = {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
};

module.exports = morgan(format, options);

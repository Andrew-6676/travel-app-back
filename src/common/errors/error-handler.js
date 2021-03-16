const { InternalServerError, MongoDuplicateError } = require('./errors-list');
const logger = require('../logging/logger');

module.exports = (err, path) => {
  // Handle mongoose duplicate errors
  if (err.code === 11000) {
    err = new MongoDuplicateError(
      `'${Object.keys(err.keyValue)}' already used`
    );
  }

  if (!err.reason) {
    logger.error(err.message, err.stack);
    err = new InternalServerError();
  }

  const response = {};
  const { reason, statusText, status } = err;

  response.status = status;
  response.data = {
    status,
    error: statusText,
    detail: reason,
    path,
  };

  return response;
};

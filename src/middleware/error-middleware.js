/* eslint-disable no-unused-vars */
const errorHandler = require('../common/errors/error-handler');

module.exports = (err, req, res, next) => {
  const path = req.originalUrl;

  const { status, data } = errorHandler(err, path);

  res.status(status);
  res.json({ errors: data });
};

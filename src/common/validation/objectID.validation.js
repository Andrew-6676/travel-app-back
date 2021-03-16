var mongoose = require('mongoose');
const { BadRequestError } = require('../errors/errors-list');

module.exports = (id, resource) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return true;
  }
  throw new BadRequestError(`invalid ${resource} ID. ID must be objectID`);
};

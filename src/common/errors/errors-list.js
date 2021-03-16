const { StatusCodes, ReasonPhrases } = require('http-status-codes');

class BadRequestError extends Error {
  constructor(reason) {
    super();
    this.status = StatusCodes.BAD_REQUEST;
    this.statusText = ReasonPhrases.BAD_REQUEST;
    this.reason = reason;
  }
}

class NotFoundError extends Error {
  constructor(entity) {
    super();
    this.status = StatusCodes.NOT_FOUND;
    this.statusText = ReasonPhrases.NOT_FOUND;
    this.reason = `${entity} not found`;
  }
}

class InternalServerError extends Error {
  constructor() {
    super();
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
    this.statusText = ReasonPhrases.INTERNAL_SERVER_ERROR;
    this.reason = 'something went wrong';
  }
}

class MongoDuplicateError extends Error {
  constructor(reason) {
    super();
    this.status = StatusCodes.CONFLICT;
    this.statusText = ReasonPhrases.CONFLICT;
    this.reason = reason;
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  MongoDuplicateError,
};

class ErrorHander extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.construcktor);
  }
}

module.exports = ErrorHander;

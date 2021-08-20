const asyncErrorHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const errorHandler = (err, req, res, next) => {
  res.status(500).send({ message: err.message });

  req.logger(`ERR: ${err.message}`);
  req.logger(`ERR: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  return;
};

export { asyncErrorHandler, errorHandler };

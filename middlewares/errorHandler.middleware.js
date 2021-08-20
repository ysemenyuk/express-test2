const asyncErrorHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const errorHandler = (err, req, res, next) => {
  res.status(500).send({ message: err.message });
  req.logger(`ERR: ${err.message}`);
  console.log(err);
  return;
};

export { asyncErrorHandler, errorHandler };

const makeResMessage = (req) => `RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`;

export { makeResMessage };

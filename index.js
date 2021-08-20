import express from 'express';

import requestLogger from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

import usersRouter from './routes/users.router.js';
import coordinatesRouter from './routes/coordinates.router.js';

export default () => {
  const app = express();

  app.use(express.json());
  app.use(requestLogger);

  app.use('/users', usersRouter);
  app.use('/users/:userId/coordinates', coordinatesRouter);

  app.get('/', (req, res) => {
    res.json({ message: 'server is running..' });
  });

  app.use(errorHandler);

  return app;
};

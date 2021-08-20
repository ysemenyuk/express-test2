import express from 'express';
import debug from 'debug';

import requestLogger from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

import usersRouter from './routes/users.router.js';
import coordinatesRouter from './routes/coordinates.router.js';

const app = express();
const logger = debug('server');

app.use(express.json());

app.use(requestLogger);

app.use('/users', usersRouter);
app.use('/users/:userId/coordinates', coordinatesRouter);

app.get('/', (req, res) => {
  res.json({ message: 'server is running..' });
});

app.use(errorHandler);

const PORT = 4000;
app.listen(PORT, () => {
  logger(`Server is running on port ${PORT}.`);
});

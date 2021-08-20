import express from 'express';

import User from '../models/user.model.js';
import { asyncErrorHandler } from '../middlewares/errorHandler.middleware.js';

const router = express.Router();

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('users.router POST /users');
    const { name } = req.body;

    const user = await User.query().insert({ name });
    // console.log(user);

    res.status(200).send(user);
    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

router.get(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('users.router GET /users');

    const users = await User.query();
    // console.log(users);

    res.status(200).send(users);
    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

export default router;

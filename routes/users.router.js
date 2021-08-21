import express from 'express';

import { makeResMessage } from '../utils/makeMessage.js';
import { asyncErrorHandler } from '../middlewares/errorHandler.middleware.js';
import usersRepository from '../repositories/users.repository.js';

const router = express.Router();

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('users.router POST /users');

    const { name } = req.body;
    const user = await usersRepository.createOne({ name });

    res.status(200).send(user);
    req.logger(makeResMessage(req));
  })
);

router.get(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('users.router GET /users');

    const users = await usersRepository.findAll();

    res.status(200).send(users);
    req.logger(makeResMessage(req));
  })
);

export default router;

import express from 'express';

import knex from '../initKnex.js';
import { asyncErrorHandler } from '../middlewares/errorHandler.middleware.js';

const router = express.Router();

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('users.router POST /users');
    const { name } = req.body;
    console.log(req.body);

    const [userId] = await knex('users').returning('id').insert({ name });
    // console.log(userId);

    res.status(200).send({ userId });
    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

router.get(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('users.router GET /users');

    const users = await knex.select().table('users');
    // console.log(users);

    res.status(200).send(users);
    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

export default router;

import express from 'express';

import knex from '../initKnex.js';
import { asyncErrorHandler } from '../middlewares/errorHandler.middleware.js';

const router = express.Router();

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('users.router POST /users');

    const { name } = req.body;
    const [id] = await knex('users').returning('id').insert({ name });
    const user = await knex('users').where({ id }).first();
    res.status(200).send(user);

    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

router.get(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('users.router GET /users');

    const users = await knex.select().table('users');
    res.status(200).send(users);

    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

export default router;

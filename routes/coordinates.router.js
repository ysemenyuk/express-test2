import express from 'express';

import knex from '../initKnex.js';
import { asyncErrorHandler } from '../middlewares/errorHandler.middleware.js';

const router = express.Router({ mergeParams: true });

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('coordinates.router POST /users/userId/coordinates');

    // console.log(req.body);
    // console.log(req.params);

    const userId = Number(req.body.userId);
    const latitude = Number(req.body.location.latitude);
    const longitude = Number(req.body.location.longitude);
    const time = req.body.time || new Date();

    // console.log({ userId, latitude, longitude, time });

    const [id] = await knex('coordinates').returning('id').insert({
      userId,
      latitude,
      longitude,
      time,
    });

    const point = await knex('coordinates').where({ id }).first();

    res.status(200).send(point);
    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

router.get(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('coordinates.router GET /users/userId/coordinates');

    // console.log(req.query);
    // console.log(req.params);

    const { userId } = req.params;
    const startTime = req.query.startTime || new Date(0).toISOString();
    const endTime = req.query.endTime || new Date().toISOString();

    // console.log({ userId, startTime, endTime });

    const coordinates = await knex
      .select()
      .table('coordinates')
      .where('userId', '=', userId)
      .whereBetween('time', [startTime, endTime]);

    // console.log(coordinates);

    res.status(200).send(coordinates);
    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

export default router;

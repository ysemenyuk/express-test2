import express from 'express';

import User from '../models/user.model.js';
import Coordinate from '../models/coordinate.model.js';

import { asyncErrorHandler } from '../middlewares/errorHandler.middleware.js';

const router = express.Router({ mergeParams: true });

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('coordinates.router POST /users/userId/coordinates');

    // console.log(req.body);
    // console.log(req.params);

    const userId = Number(req.body.user_id);
    const latitude = Number(req.body.location.latitude);
    const longitude = Number(req.body.location.longitude);
    const time = req.body.date || new Date();

    // console.log({userId, latitude, longitude});

    const existPoint = await Coordinate.query()
      .where('latitude', latitude)
      .where('longitude', longitude)
      .first();

    // console.log('existPoint', existPoint);

    if (existPoint) {
      await User.relatedQuery('coordinates').for(userId).relate({ id: existPoint.id, time });
      res.status(200).send(existPoint);
      return;
    }

    const newPoint = await User.relatedQuery('coordinates')
      .for(userId)
      .insert({ latitude, longitude, time });

    // console.log('newPoint', newPoint);

    res.status(200).send(newPoint);

    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

router.get(
  '/',
  asyncErrorHandler(async (req, res) => {
    req.logger('coordinates.router GET /users/userId/coordinates');

    // console.log(req.query);
    // console.log(req.params);

    const userId = req.params.userId;
    const startTime = req.query.start_time || new Date(0).toISOString();
    const endTime = req.query.end_time || new Date().toISOString();

    // console.log({ userId, startTime, endTime });

    const coordinates = await User.relatedQuery('coordinates')
      .for(userId)
      .whereBetween('time', [startTime, endTime])

    // console.log(coordinates);

    res.status(200).send(coordinates);

    req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
  })
);

export default router;

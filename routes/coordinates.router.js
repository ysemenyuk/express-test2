import express from 'express';

import { makeResMessage } from '../utils/makeMessage.js';
import { asyncErrorHandler } from '../middlewares/errorHandler.middleware.js';
import coordinatesRepo from '../repositories/coordinates.repository.js';

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
    const time = req.body.time || new Date().toISOString();
    // console.log({ userId, latitude, longitude, time });

    const coordinate = await coordinatesRepo.createOne({ userId, latitude, longitude, time });
    // console.log(coordinates);

    res.status(200).send(coordinate);
    req.logger(makeResMessage(req));
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

    const coordinates = await coordinatesRepo.findAll({ userId, startTime, endTime });
    // console.log(coordinates);

    res.status(200).send(coordinates);
    req.logger(makeResMessage(req));
  })
);

export default router;

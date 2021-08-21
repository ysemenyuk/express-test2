import knex from '../initKnex.js';

export default {
  createOne: async ({ userId, latitude, longitude, time }) => {
    const [id] = await knex('coordinates').returning('id').insert({
      userId,
      latitude,
      longitude,
      time,
    });

    const coordinates = await knex('coordinates').where({ id }).first();
    return coordinates;
  },

  findAll: async ({ userId, startTime, endTime }) => {
    const coordinates = await knex
      .select()
      .table('coordinates')
      .where('userId', '=', userId)
      .whereBetween('time', [startTime, endTime]);

    return coordinates;
  },
};

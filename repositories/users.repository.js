import knex from '../initKnex.js';

export default {
  createOne: async ({ name }) => {
    const [id] = await knex('users').returning('id').insert({ name });
    const user = await knex('users').where({ id }).first();
    return user;
  },

  findAll: async () => {
    const users = await knex.select().table('users');
    return users;
  },
};

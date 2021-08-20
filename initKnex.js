import Knex from 'knex';
import knexConfig from './knexfile.js';

const mode = process.env.NODE_ENV || 'development';

const knex = Knex(knexConfig[mode]);

export default knex;

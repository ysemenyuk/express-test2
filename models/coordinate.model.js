import pkg from 'objection';
const { Model } = pkg;
// import path from 'path';

// import knex from '../dbConfig.js';

import User from './user.model.js';

export default class Coordinate extends Model {
  static get tableName() {
    return 'coordinates';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['latitude', 'longitude'],
      properties: {
        id: { type: 'integer' },
        latitude: { type: 'float' },
        longitude: { type: 'float' },
      },
    };
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.ManyToManyRelation,
        // modelClass: path.join(path.resolve(), 'models', 'student.model.js'),
        modelClass: User,
        join: {
          from: 'coordinates.id',
          through: {
            from: 'coordinates_users.coordinate_id',
            to: 'coordinates_users.user_id',
            extra: ['time'],
          },
          to: 'users.id',
        },
      },
    };
  }
}

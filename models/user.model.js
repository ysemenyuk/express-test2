import objection from 'objection';
const { Model } = objection;

import Coordinate from './coordinate.model.js';

export default class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    return {
      coordinates: {
        relation: Model.ManyToManyRelation,
        modelClass: Coordinate,
        join: {
          from: 'users.id',
          through: {
            from: 'coordinates_users.user_id',
            to: 'coordinates_users.coordinate_id',
            extra: ['time'],
          },
          to: 'coordinates.id',
        },
      },
    };
  }
}
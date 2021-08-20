exports.up = (knex) =>
  knex.schema.createTable('coordinates_users', (table) => {
    table.increments('id').primary();
    table.integer('coordinate_id').references('coordinates.id');
    table.integer('user_id').references('users.id');
    table.timestamp('time').notNullable();
  });

exports.down = (knex) => knex.schema.dropTable('coordinates_users');

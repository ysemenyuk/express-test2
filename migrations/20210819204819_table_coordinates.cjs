exports.up = (knex) =>
  knex.schema.createTable('coordinates', (table) => {
    table.increments('id').primary();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.integer('user_id').notNullable().references('users.id');
    table.timestamp('time');
  });

exports.down = (knex) => knex.schema.dropTable('coordinates');

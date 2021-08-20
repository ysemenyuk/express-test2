exports.up = (knex) =>
  knex.schema.createTable('coordinates', (table) => {
    table.increments('id').primary();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable('coordinates');

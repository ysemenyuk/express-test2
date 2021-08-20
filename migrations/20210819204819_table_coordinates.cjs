exports.up = (knex) =>
  knex.schema.createTable('coordinates', (table) => {
    table.increments('id').primary();
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
  });

exports.down = (knex) => knex.schema.dropTable('coordinates');

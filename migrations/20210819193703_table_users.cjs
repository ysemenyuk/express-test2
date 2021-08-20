exports.up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });

exports.down = (knex) => knex.schema.dropTable('users');

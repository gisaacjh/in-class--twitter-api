
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('users', table => {
      table.increments();

      table.string('username');
      table.string('name');
      table.string('profileUrl');
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('users');
};

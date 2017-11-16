
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('tweets', table => {
      table.increments();

      table.string('description');
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.integer('likes');
      table.integer('retweets');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('tweets');
};

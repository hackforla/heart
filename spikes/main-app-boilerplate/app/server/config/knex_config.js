const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'postgres',
    user: 'postgres',
    password: 'postgres',
    database: 'heart',
  },
});

module.exports = knex;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'heart',
  },
});

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => res.status(200).render('index'));
require('./routes/notes')(app, knex);

module.exports = app;

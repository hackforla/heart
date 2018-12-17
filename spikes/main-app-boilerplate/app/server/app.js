const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => res.status(200).render('index'));
require('./routes/notes')(app);

module.exports = app;

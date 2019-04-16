require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');

const { localStrategy, jwtStrategy } = require('../server/auth');

const app = express();
app.use(cors());

// Logging
app.use(morgan('common'));

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../client')));

const jwtAuth = passport.authenticate('jwt', { session: false });

// A protected endpoint which needs a valid JWT to access it
app.get('/protected', jwtAuth, (req, res) => {
  res.json({
    data: 'rosebud',
  });
});

app.get('/', (req, res) => res.status(200).render('index'));
require('./routes/participants')(app);
require('./routes/citations')(app);
require('./routes/users')(app);
require('./auth/router')(app);

module.exports = app;

require('dotenv').config();
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcryptjs');
const knex = require('../config/knex_config.js');

const config = require('../../config');

const localStrategy = new LocalStrategy((username, password, callback) => {
  let user;
  knex('users')
    .where('username', username)
    .then((_user) => {
      user = _user;
      if (!user) {
        return Promise.reject(new Error('Incorrect username or password'));
      }
      // Validate password
      return bcrypt.compare(password, user[0].password);
    })
    .then((res) => {
      if (!res) {
        return Promise.reject(new Error('Incorrect username or password!'));
      }
      return callback(null, user);
    })
    .catch((err) => {
      if (err.reason === 'LoginError') {
        return callback(null, false, err);
      }
      return callback(err, false);
    });
});

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: config.JWT_SECRET,
    // Look for the JWT as a Bearer auth header
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    // Only allow HS256 tokens - the same as the ones we issue
    algorithms: ['HS256'],
  },
  (payload, done) => {
    done(null, payload.user);
  },
);

module.exports = { localStrategy, jwtStrategy };

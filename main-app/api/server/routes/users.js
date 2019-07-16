const bcrypt = require('bcryptjs');
const knex = require('../config/knex_config.js');


module.exports = (app) => {
  // Post to register/sign-up a new user
  app.post('/users', (req, res) => {
    const {
      username, password,
    } = req.body.data;

    if (!username) {
      return res.status(422).json({
        code: 422,
        reason: 'ValidationError',
        message: 'Missing field',
        location: 'username',
      });
    }
    if (!password) {
      return res.status(422).json({
        code: 422,
        reason: 'ValidationError',
        message: 'Missing field',
        location: 'password',
      });
    }

    let errorReason = '';
    let errorCode = 500;
    // Check if username already exists
    return knex('users')
      .where('username', username)
      .then((data) => {
        if (data.length > 0) {
          // There is an existing user with the same username
          errorReason = 'ValidationError';
          errorCode = 422;
          return Promise.reject(new Error('Username already taken'));
        }
        // If there is no existing user, hash the password
        return bcrypt.hash(password, 10);
      })
      .then((hash) => {
        req.body[0].password = hash;
        knex('users').insert(req.body.data)
          .then(() => res.status(201).send());
      })
      .catch((err) => {
        if (errorReason === 'ValidationError') {
          return res.status(errorCode).json(err.message);
        }
        return res.status(500).json({ code: 500, message: 'Internal server error' });
      });
  });

  // For debug only!!!
  // *****************
  // Never expose all the users like below in a production application!!!

  /* app.get('/users', (req, res) => {
    knex.select().table('users')
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err));
  }); */

  /* app.get('/users/:id', (req, res) => {
    knex('users')
      .where('id', req.params.id)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err));
  }); */

  /* app.delete('/users/:id', (req, res) => {
    knex('users')
      .where('id', req.params.id)
      .del()
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  }); */
};

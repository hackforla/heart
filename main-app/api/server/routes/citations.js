const passport = require('passport');
const knex = require('../config/knex_config.js');

const jwtAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.post('/citations', jwtAuth, (req, res) => {
    knex('citations').insert(req.body)
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });

  app.put('/citations/:id', jwtAuth, (req, res) => {
    knex('citations')
      .where('id', req.params.id)
      .update(req.body)
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });
};

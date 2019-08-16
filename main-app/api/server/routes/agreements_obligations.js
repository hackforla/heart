const passport = require('passport');
const knex = require('../config/knex_config.js');

const jwtAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.put('/agreements_obligations/:id', jwtAuth, (req, res) => {
    knex('agreements_obligations')
      .where('id', req.params.id)
      .update(req.body.data, Object.keys(req.body.data))
      .then(agreements_obligations => res.status(200).send({ agreements_obligations }))
      .catch(err => res.status(500).send(err));
  });

  app.delete('/agreements_obligations/:id', jwtAuth, (req, res) => {
    knex('agreements_obligations')
      .where('id', req.params.id)
      .del()
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });

  app.get('/agreements_obligations/:id', jwtAuth, (req, res) => {
    knex('agreements_obligations')
      .where('id', req.params.id)
      .then(agreements_obligations => res.status(200).send(agreements_obligations))
      .catch(err => res.status(500).send(err));
  });

  app.get('/agreements_obligations', jwtAuth, (req, res) => {
    knex.select().table('agreements_obligations')
      .then(agreements_obligations => res.status(200).send(agreements_obligations))
      .catch(err => res.status(500).send(err));
  });
};

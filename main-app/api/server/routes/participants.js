const passport = require('passport');
const knex = require('../config/knex_config.js');

const jwtAuth = passport.authenticate('jwt', { session: false });

module.exports = (app) => {
  app.get('/participants', jwtAuth, (req, res) => {
    knex.select().table('participants')
      .then(participants => res.status(200).send(participants))
      .catch(err => res.status(500).send(err));
  });

  app.post('/participants', jwtAuth, (req, res) => {
    knex('participants').insert(req.body.data)
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });

  app.put('/participants/:id', jwtAuth, (req, res) => {
    knex('participants')
      .where('id', req.params.id)
      .update(req.body.data, Object.keys(req.body.data))
      .then(participants => res.status(200).send({ participants }))
      .catch(err => res.status(500).send(err));
  });

  app.delete('/participants/:id', jwtAuth, (req, res) => {
    knex('participants')
      .where('id', req.params.id)
      .del()
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });

  app.get('/participants/:id', jwtAuth, (req, res) => {
    knex('participants')
      .where('id', req.params.id)
      .then(participants => res.status(200).send(participants))
      .catch(err => res.status(500).send(err));
  });

  app.get('/participants/:id/citations', jwtAuth, (req, res) => {
    knex('citations')
      .where('participant_id', req.params.id)
      .then(citations => res.status(200).send(citations))
      .catch(err => res.status(500).send(err));
  });

  app.post('/participants/:id/citations', jwtAuth, (req, res) => {
    knex('citations')
      .insert('participant_id', req.params.id)
      .insert(req.body.data, Object.keys(req.body.data)) // possibly overwriting id, not saving
      .then(citations => res.status(200).send(citations))
      .catch(err => res.status(500).send(err));
  });
};

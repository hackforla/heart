const knex = require('../config/knex_config.js');

module.exports = (app) => {
  app.get('/notes', (req, res) => {
    knex.select().table('notes')
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err));
  });

  app.post('/notes', (req, res) => {
    knex('notes').insert({ note: req.body.note })
      .then(() => {
        res.status(200).send({ status: 'ok' });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  app.put('/notes/:id', (req, res) => {
    knex('notes')
      .where('id', req.params.id)
      .update({
        note: req.body.note,
      })
      .then(() => res.status(200).send({ status: 'ok' }))
      .catch(err => res.status(500).send(err));
  });

  app.delete('/notes/:id', (req, res) => {
    knex('notes')
      .where('id', req.params.id)
      .del()
      .then(() => res.status(200).send({ status: 'ok' }))
      .catch(err => res.status(500).send(err));
  });
};

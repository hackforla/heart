const request = require('supertest');
const app = require('../server/app');
const knex = require('../server/config/knex_config');

const newUser = {
  first_name: 'me',
  last_name: 'me2',
  email: 'email@email.com',
  pssword: 'pwd123',
};

afterAll(() => {
  knex.destroy();
});

describe('GET /users', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .get('/users')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  //  TODO: write more tests once we have auth
});

describe('POST /users', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .post('/users')
      .send(JSON.stringify(newUser))
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('DELETE /users', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .delete('/users/:id')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  // TODO: write test for record that doesn't exist
  // TODO: write more tests once we have auth
});

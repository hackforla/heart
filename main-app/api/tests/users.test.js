const request = require('supertest');
const app = require('../server/app');
const knex = require('../server/config/knex_config');

let daToken = 'EXAMPLETOKEN';

const newUser = {
  username: 'johnny',
  pssword: 'pwd1234',
};

const login = {
  username: process.env.TEST_LOGIN_USERNAME,
  password: process.env.TEST_LOGIN_PASSWORD,
};

beforeAll(() => request(app)
  .post('/login')
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .send(login)
  .then((response) => {
    daToken = response.body.authToken;
  }));

afterAll(() => {
  knex.destroy();
});

// Tests not running now because these routes are commented out for the time being.
// describe('GET /users', () => {
//   test('It should respond with a 200', (done) => {
//     request(app)
//       .get('/users')
//       .set('Accept', 'application/json')
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${daToken}`)
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });
//   //  TODO: write more tests once we have auth
// });

describe('POST /users', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${daToken}`)
      .send({ data: newUser })
      .then((response) => {
        expect(response.statusCode).toBe;
        done();
      });
  });
});

// Tests not running now because these routes are commented out for the time being.
// describe('DELETE /users', () => {
//   test('It should respond with a 200', (done) => {
//     request(app)
//       .delete('/users/:id')
//       .set('Accept', 'application/json')
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${daToken}`)
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

// TODO: write test for record that doesn't exist
// TODO: write more tests once we have auth
// });

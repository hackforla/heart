const request = require('supertest');
const app = require('../server/app');
const knex = require('../server/config/knex_config');

let daToken = 'EXAMPLETOKEN';

const login = {
  username: process.env.TEST_LOGIN_USERNAME,
  password: process.env.TEST_LOGIN_PASSWORD,
};

const newParticipant = {
  first_name: 'Mitchell2',
  middle_name: 'W',
  last_name: 'Andrews',
  aka: [
    'Mitch',
  ],
  status: 'status',
  dob: '1990-08-06T00:00:00.000Z',
  phone: '1231231234',
  email: 'email@email.com',
  address: '123 some st',
  age: '28',
  ethnicity: 'caucasian',
  race: 'white',
  gender: 'male',
  income_source: 'work',
  income_range: '1-1000000',
  family_status: 'single',
  housing_status: 'rent',
  chronic_homeless: false,
  veteran_status: 'not veteran',
  urgent: false,
  services: [
    'service1',
    'service2',
  ],
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

describe('GET /participants', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .get('/participants')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${daToken}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  //  TODO: write more tests assert data values
  //  TODO: write more tests once we have auth
});

describe('POST /participants', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .post('/participants')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${daToken}`)
      .send(JSON.stringify(newParticipant))
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  //  TODO: write more tests to assert data values
});

describe('PUT /participants', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .put('/participants/2')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${daToken}`)
      .send({ data: { first_name: 'Mitchellupdated' } })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  //  TODO: write more tests to assert data values
  //  TODO: write more tests once we have auth
});

describe('DELETE /participants', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .delete('/participants/2')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${daToken}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  // TODO: write test for record that doesn't exist
  // TODO: write more tests once we have auth
});

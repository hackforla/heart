const expect = require('expect');
const request = require('supertest');
const app = require('../server/app');

describe('GET /notes', () => {
  test('It should respond with a 200', async () => {
    const response = await request(app).get('/notes');
    expect(response.statusCode).toBe(200);
  });
});

describe('POST /notes', () => {
  test('It should respond with a 200', (done) => {
    request(app)
      .post('/notes')
      .send({
        note: 'newnote',
      })
      .expect(200)
      .end(done);
  });
});

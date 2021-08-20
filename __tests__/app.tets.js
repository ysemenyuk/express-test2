import request from 'supertest';
import getApp from '../index.js';
import knex from '../initKnex.js';

describe('requests', () => {
  let app;

  beforeAll(async () => {
    app = await getApp();
  });

  beforeEach(async () => {
    await knex.migrate.latest();
    await knex.seed.run();
  });

  it('GET 200', async () => {
    const response = await request(app).get('/');
    console.log(response.statusCode);

    expect(response.statusCode).toBe(200);
  });

  it('GET users', async () => {
    const response = await request(app).get('/users');
    console.log(response.statusCode);
    console.log(response.body);

    expect(response.statusCode).toBe(200);
  });

  afterAll(async (done) => {
    done();
  });
});

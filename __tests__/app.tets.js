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
    expect(response.statusCode).toBe(200);
  });

  it('GET coordinates', async () => {
    const response = await request(app).get('/users/1/coordinates');
    // console.log(response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(4);
  });

  it('POST coordinate', async () => {
    const data = {
      userId: '1',
      time: '2022-01-01T16:00:00Z',
      location: {
        latitude: '45.51633',
        longitude: '12.63622',
      },
    };

    const response = await request(app).post('/users/1/coordinates').send(data);
    expect(response.statusCode).toBe(200);

    const { userId, time, location } = data;

    const point = await knex('coordinates')
      .where({ ...location, userId, time })
      .first();
    expect(point).not.toBeUndefined();
  });

  afterAll((done) => {
    knex.destroy();
    done();
  });
});

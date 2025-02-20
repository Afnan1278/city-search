import request from 'supertest';
import express from 'express';
import citiesRoutes from '../../routes/citiesRoutes';

const app = express();
app.use('/api/cities', citiesRoutes);

describe('GET /api/cities', () => {
  it('should return a list of cities', async () => {
    const response = await request(app).get('/api/cities');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('cities');
    expect(response.body).toHaveProperty('page');
    expect(response.body).toHaveProperty('limit');
    expect(response.body).toHaveProperty('total');
  });
});


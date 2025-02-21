import request from 'supertest';
import app from '../../app'; // Assuming you have an Express app instance exported from app.ts

describe('GET /api/cities', () => {
  it('should return a list of cities', async () => {
    const response = await request(app).get('/api/cities');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('cities');
    expect(response.body).toHaveProperty('page');
    expect(response.body).toHaveProperty('limit');
    expect(response.body).toHaveProperty('total');
  });

  it('should filter cities by query', async () => {
    const response = await request(app).get('/api/cities').query({ query: 'aus' });
    expect(response.status).toBe(200);
    expect(response.body.cities).toHaveLength(1);
    expect(response.body.cities[0]).toMatchObject({
      name: 'Sydney',
      country: 'Australia'
    });
  });
  it('should filter cities by case-insensitive query', async () => {
    const response = await request(app).get('/api/cities').query({ query: 'sYdNeY' });
    expect(response.status).toBe(200);
    expect(response.body.cities).toHaveLength(1);
    expect(response.body.cities[0]).toMatchObject({
      name: 'Sydney',
      country: 'Australia'
    });
  });

  it('should paginate results', async () => {
    const response = await request(app).get('/api/cities').query({ page: 1, limit: 2 });
    expect(response.status).toBe(200);
    expect(response.body.cities).toHaveLength(2);
  });

  it('should return an empty array if no results match', async () => {
    const response = await request(app).get('/api/cities').query({ query: 'nonexistent' });
    expect(response.status).toBe(200);
    expect(response.body.cities).toHaveLength(0);
  });
 
});
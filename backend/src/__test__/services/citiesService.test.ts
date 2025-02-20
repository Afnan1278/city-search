import { searchCities } from '../../services/citiesService';
import { City } from '../../types/cityTypes';
import { citiesData } from '../../models/city.model';
const mockCities: City[] = citiesData

describe('searchCities', () => {
  it('should return all cities if no query is provided', () => {
    const result = searchCities({ query: '', page: 1, limit: 10 });
    expect(result).toEqual({ cities: mockCities, total: mockCities.length });
  });

  it('should filter cities by query', () => {
    const result = searchCities({ query: 'aus', page: 1, limit: 10 });
    expect(result.cities).toHaveLength(1);
    expect(result.cities[0]).toMatchObject({
      name: 'Sydney',
      country: 'Australia'
    });
  });

  it('should paginate results', () => {
    const result = searchCities({ query: '', page: 1, limit: 2 });
    expect(result.cities).toEqual(mockCities.slice(0, 2));

    const resultPage2 = searchCities({ query: '', page: 2, limit: 2 });
    expect(resultPage2.cities).toEqual(mockCities.slice(2, 4));
  });

  it('should return an empty array if no results match', () => {
    const result = searchCities({ query: 'nonexistent', page: 1, limit: 10 });
    expect(result).toEqual({ cities: [], total: 0 });
  });
});

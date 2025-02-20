import { City, CitySearchQuery } from '../types/cityTypes';
import { citiesData } from '../models/city.model';

// Function to search and paginate cities
export const searchCities = ({ query, page, limit }: CitySearchQuery): City[] => {
    let filteredCities = citiesData
        if (query) {
      const searchQuery = query.toLowerCase();
      filteredCities = filteredCities.filter(city => 
        city.name.toLowerCase().includes(searchQuery) ||
        city.country.toLowerCase().includes(searchQuery) ||
        city.continent.toLowerCase().includes(searchQuery)
      );
    }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return filteredCities.slice(startIndex, endIndex);
};

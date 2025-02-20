export interface City {
    name: string;
    name_native: string;
    country: string;
    continent: string;
    latitude: string;
    longitude: string;
    population: string;
    founded: string;
    landmarks: string[];
  }
  
  export interface CitySearchQuery {
    query: string;
    page: number;
    limit: number;
  }

  export interface CitySearchResponseDto {
    cities: City[]; 
    page: number;
    limit: number;
    total: number;
  }
  
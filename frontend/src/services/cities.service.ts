
import { mockCities } from "../data/mock-cities";
import { axiosClient } from '../lib/axios';

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

export interface CityResponse {
  cities: City[];
  total: number;
}

export interface SearchParams {
  query?: string;
  page?: number;
  limit?: number;
  continent?: string;
}

export const citiesService = {
  getCities: async (params: SearchParams): Promise<CityResponse> => {
    return await axiosClient.get('/cities', { params }).then(res => res.data);
  }
};

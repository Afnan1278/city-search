import { Request, Response } from 'express';
import { searchCities } from '../services/citiesService';
import { City, CitySearchQuery, CitySearchResponseDto } from '../types/cityTypes';
/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Get a list of cities
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *           default: ""
 *         description: The query for city search
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of results per page
 *     responses:
 *       200:
 *         description: A list of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 total:
 *                   type: integer
 */
export const getCities = (req: Request, res: Response):any => {
    const { query = "", page = 1, limit = 10 }: CitySearchQuery = req.query as unknown as CitySearchQuery;
  
  const resService: {total:number,cities:City[]} = searchCities({
    query: query as string,
    page: Number(page),
    limit: Number(limit),
  });
  const response: CitySearchResponseDto = {
    cities: resService.cities,
    page: Number(page),
    limit: Number(limit),
    total: resService.total,
  };
   res.json(response);
};
import express from 'express';
import { getCities } from '../controllers/citiesController';

const router = express.Router();

router.get('/', getCities);

export default router;

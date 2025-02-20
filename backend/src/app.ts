import express from 'express';
import citiesRoutes from './routes/citiesRoutes';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './middlewares/errorhandler';
import cors from 'cors';

const app = express();

// CORS middleware configuration
const corsOptions = {
    origin: '*', // Specify allowed origin(s)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies to be sent with requests
  };
  
  // Use CORS middleware
  app.use(cors(corsOptions));

// Middleware
app.use(express.json());
// Swagger options
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'City API',
        version: '1.0.0',
        description: 'API to fetch cities data',
      },
    },
    apis: ['./controllers/*.ts'], // Path to your controller files
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  
  // Use Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  // Your API routes
  app.use('/api/cities', citiesRoutes);
  
  // Global error handler middleware - This should be placed **after** the routes
  app.use(errorHandler);

export default app;

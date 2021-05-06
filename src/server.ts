import express from 'express';
import './database';
import { categoriesRoutes } from './routes/categories.routes';

import './shared/container';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => console.log('server is running!'));
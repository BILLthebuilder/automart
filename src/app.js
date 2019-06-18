/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger';
import routes from './server/v2/routes/routes';

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}...`));

export default app;

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
app.use(routes);
app.get('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        error: {
            message: 'The requested url was not found on this server',
            solution: 'visit / to view the accepted urls'
        }
    });
});
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}...`));

export default app;

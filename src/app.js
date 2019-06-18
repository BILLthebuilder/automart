/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// import routes from './server/v2/routes/routes';

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(routes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}...`));

export default app;

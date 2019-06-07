import express from 'express';
import bodyParser from 'body-parser';

import routes from './server/v1/routes/signup';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}...`));

export default app;

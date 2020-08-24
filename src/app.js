require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const routes = require('./routes/routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// Documentation
app.use('/docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}...`));

module.exports = app;

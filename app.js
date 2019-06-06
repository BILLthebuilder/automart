import express from 'express';

import signupRoute from './server/v1/routes/signup';

const app = express();
app.use(signupRoute);

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}...`));

export default signupRoute;

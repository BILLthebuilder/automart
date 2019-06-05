import express from 'express';

import signupRoute from './server/v1/routes/signup';

const app = express();
app.use(signupRoute);

// app.get('/help', (req, res) => {
//     res.status(201).send({
//         cow: 'eaten',
//         goat: 'stolen'
//     });
// });

const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}...`));

// export default signupRoute;

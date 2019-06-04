import express from 'express';

const app = express();
const signup = {};
const port = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on port ${port}...`));

export default signup;

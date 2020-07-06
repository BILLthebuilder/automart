const jwt = require('jsonwebtoken');

const token = jwt.sign(
    {
        id: 1
    },
    'seccret',
    { expiresIn: '1d' }
);

const wrongToken =
    'eyJhbiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU2MTc0MDU3MSwiZXhwIjoxNTYxODI2OTcxfQ.vBjfSCFmaGdt2Uv7uSknlUsD_BsWDfEDspLjtN8LxZ4';

module.exports = {
    token,
    wrongToken
};

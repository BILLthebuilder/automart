// import jwt from 'jsonwebtoken';
import Helper from '../helpers/helper';

export const token = Helper.generateToken({ id: 1 });

export const wrongToken =
    'eyJhbiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU2MTc0MDU3MSwiZXhwIjoxNTYxODI2OTcxfQ.vBjfSCFmaGdt2Uv7uSknlUsD_BsWDfEDspLjtN8LxZ4';

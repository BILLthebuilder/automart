import jwt from 'jsonwebtoken';
import db from '../db/index';

const Auth = {
    async verifyToken(req, res, next) {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({
                status: 401,
                error: 'No access token provided'
            });
        }
        try {
            const decoded = await jwt.verify(token, process.env.SECRET);
            const getUser = 'SELECT * FROM users WHERE id = $1';
            const { rows } = await db.query(getUser, [decoded.userId]);
            if (!rows[0]) {
                return res.status(401).json({
                    status: 401,
                    error: 'Invalid access token!!'
                });
            }
            req.user = { id: decoded.userId };
            next();
        } catch (error) {
            return res.status(400).json({
                status: 400,
                error: error.message
            });
        }
    }
};

export default Auth;

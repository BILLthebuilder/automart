import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const Helper = {
    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },

    comparePassword(hashPassword, password) {
        return bcrypt.compareSync(password, hashPassword);
    },
    generateToken(id) {
        const token = jwt.sign(
            {
                userId: id
            },
            process.env.SECRET,
            { expiresIn: '1d' }
        );
        return token;
    }
};

export default Helper;
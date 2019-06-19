import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Auth = {
    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },

    comparePassword(hashPassword, password) {
        return bcrypt.compareSync(password, hashPassword);
    },

    isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
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

export default Auth;

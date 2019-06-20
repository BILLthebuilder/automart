/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai from 'chai';
import asserttype from 'chai-asserttype';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import app from '../../../app';

chai.use(chaihttp);
chai.use(asserttype);
describe('User registration', () => {
    const user = {
        Data: {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            password: 'johndoe@123',
            email: 'johndoe@gmail.com',
            address: '80100122',
            isAdmin: false
        }
    };
    it('A user should be able to register', () => {
        chai.request(app)
            .post('/api/v2/auth/signup')
            .send(user)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
            });
    });
});

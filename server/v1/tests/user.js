/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai from 'chai';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import signupRoute from '../../../app';

chai.use(chaihttp);
describe('User registration', () => {
    const user = {
        email: 'billkariri@gmail.com',
        first_name: 'Bill',
        last_name: 'Kariri',
        password: 'bill@Kariri123',
        address: '80100',
        is_admin: true
    };
    it('should create a user', () => {
        chai.request(signupRoute)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
                expect(res.body)
                    .to.have.status(201)
                    .and.to.be.an('object');
                expect(res.body.data)
                    .to.have.a.property('id')
                    .and.to.have.a.property('first_name')
                    .and.to.be.a('string')
                    .and.to.have.a.property('last_name')
                    .and.to.be.a('string')
                    .and.to.have.a.property('email')
                    .and.to.be.a('string')
                    .and.to.have.a.property('address')
                    .and.to.be.a('string')
                    .and.to.have.a.property('isAdmin')
                    .and.to.be.a('boolean');
            });
    });
});

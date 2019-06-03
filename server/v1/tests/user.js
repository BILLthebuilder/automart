/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai from 'chai';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import signup from '../../../app';

chai.use(chaihttp);
describe('User registration', () => {
    const user = {
        id: 1,
        email: 'billkariri@gmail.com',
        first_name: 'Bill',
        last_name: 'Kariri',
        password: 'bill@Kariri',
        address: '80100',
        is_admin: true
    };
    it('should create a user', done => {
        chai.request(signup)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
                expect(res.body).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.have.a.property('id');
                expect(res.body.data)
                    .to.have.a.property('first_name')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('last_name')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('email')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('email')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('address')
                    .and.to.be.a('string');
                expect(res.body.data)
                    .to.have.a.property('is_admin')
                    .and.to.be.a('boolean');
            });
        done();
    });
});

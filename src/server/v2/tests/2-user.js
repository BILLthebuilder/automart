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
            email: 'johndoe@gmail.com',
            lastName: 'Doe',
            password: 'johndoe@123',
            address: '80100122',
            isAdmin: true
        }
    };
    it('A user should be able to register', done => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err, res) => {
                expect(res.body)
                    .to.have.status(201)
                    .and.to.be.an('object');
                expect(res.body.Data).to.have.a.property('id');
                expect(res.body.Data)
                    .to.have.a.property('firstName')
                    .and.to.be.a('string');
                expect(res.body.Data)
                    .to.have.a.property('lastName')
                    .and.to.be.a('string');
                expect(res.body.Data)
                    .to.have.a.property('email')
                    .and.to.be.a('string');
                expect(res.body.Data)
                    .to.have.a.property('address')
                    .and.to.be.a('string');
                expect(res.body.Data)
                    .to.have.a.property('isAdmin')
                    .and.to.be.boolean();
                done();
            });
    });
});

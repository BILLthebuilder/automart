const chai = require('chai');
const asserttype = require('chai-asserttype');
const chaihttp = require('chai-http');

const { expect } = chai;
const app = require('../app');

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
    it('A user should not be able to register', () => {
        chai.request(app)
            .post('/api/v2/auth/signup')
            .send(user)
            .end((err, res) => {
                expect(res.body)
                    .to.have.status(400)
                    .and.to.be.an('object');
                expect(res.body).to.have.a.property('error');
            });
    });
});
describe('User Login', () => {
    const user = {
        Data: {
            email: 'johndoe@gmail.com',
            password: 'johndoe@123'
        }
    };
    it('A user should not be able to log in', () => {
        chai.request(app)
            .post('/api/v2/auth/signin')
            .send(user)
            .end((err, res) => {
                expect(res.body)
                    .to.have.status(400)
                    .and.to.be.an('object');
                expect(res.body).to.have.a.property('error');
            });
    });
});

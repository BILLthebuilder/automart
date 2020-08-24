const chai = require('chai');
const asserttype = require('chai-asserttype');
const chaihttp = require('chai-http');

const { expect } = chai;
const app = require('../app');

const { token, wrongToken } = require('./token');

chai.use(chaihttp);
chai.use(asserttype);

describe('Purchase Order', () => {
    const order = {
        id: 1,
        carId: 1,
        createdOn: '2019 Jan 5',
        status: 'pending',
        price: 35,
        priceOffered: 40
    };
    const price = { price: 5 };
    it('A user Should not be able to create a purchase order without authorization', done => {
        chai.request(app)
            .post('/api/v2/order/')
            .send(order)
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user Should not be able to create a purchase order with a wrong token', done => {
        chai.request(app)
            .post('/api/v2/order/')
            .set('x-access-token', wrongToken)
            .send(order)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user Should not be able to create a purchase order', done => {
        chai.request(app)
            .post('/api/v2/order/')
            .set('x-access-token', token)
            .send(order)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
    it('A user Should not be able to update purchase order price without authorization', done => {
        chai.request(app)
            .patch('/api/v2/order/:id/price')
            .send(price)
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user Should not be able to update purchase order price with a wrong token', done => {
        chai.request(app)
            .patch('/api/v2/order/:id/price')
            .set('x-access-token', wrongToken)
            .send(price)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user Should not be able to update purchase order price', done => {
        chai.request(app)
            .patch('/api/v2/order/:id/price')
            .set('x-access-token', token)
            .send(price)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
});

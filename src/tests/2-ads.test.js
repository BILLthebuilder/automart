const chai = require('chai');
const asserttype = require('chai-asserttype');
const chaihttp = require('chai-http');

const { expect } = chai;
const app = require('../app');

const { token, wrongToken } = require('./token.test');

chai.use(chaihttp);
chai.use(asserttype);

describe('Advertisements', () => {
    const ad = {
        owner: 1,
        state: 'used',
        status: 'available',
        price: 54,
        manufacturer: 'Toyota',
        model: 'Prado',
        bodyType: 'suv',
        description: 'a nice suv vehicle'
    };
    const sold = { status: 'sold' };
    const price = { price: 20 };
    it('A user should not be able to create an ad without authorization', done => {
        chai.request(app)
            .post('/api/v2/car/')
            .send(ad)
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user Should not be able to create a car sale ad with a wrong token', done => {
        chai.request(app)
            .post('/api/v2/car/')
            .set('x-access-token', wrongToken)
            .send(ad)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user should not be able to view a specific car ad without authorization', done => {
        chai.request(app)
            .get('/api/v2/cars/:id')
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user should not be able to view a specific car ad with a wrong token', done => {
        chai.request(app)
            .get('/api/v2/cars/:id')
            .set('x-access-token', wrongToken)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user should not be able to view a specific car ad', done => {
        chai.request(app)
            .get('/api/v2/cars/:id')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
    it('A user should not be able to view all unsold car ads without authorization', done => {
        chai.request(app)
            .get('/api/v2/status/cars')
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user should not be able to view all unsold car ads with a wrong token', done => {
        chai.request(app)
            .get('/api/v2/status/cars')
            .set('x-access-token', wrongToken)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user should not be able to view all unsold car ads', done => {
        chai.request(app)
            .get('/api/v2/status/cars')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
    it('A user should not be able to view all used unsold car ads without authorization', done => {
        chai.request(app)
            .get('/api/v2/status/used')
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user should not be able to view all used unsold car ads with a wrong token', done => {
        chai.request(app)
            .get('/api/v2/status/used')
            .set('x-access-token', wrongToken)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user should not be able to view all used unsold car ads', done => {
        chai.request(app)
            .get('/api/v2/status/used')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
    it('A user should not be able to view all posted ads without authorization', done => {
        chai.request(app)
            .get('/api/v2/cars')
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user should not be able to view all posted ads with a wrong token', done => {
        chai.request(app)
            .get('/api/v2/cars')
            .set('x-access-token', wrongToken)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user should not be able to view all posted ads', done => {
        chai.request(app)
            .get('/api/v2/cars')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
    it('A user should not be able to delete a specific car ad without authorization', done => {
        chai.request(app)
            .delete('/api/v2/car/:id')
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user should not be able to delete a specific car ad with a wrong token', done => {
        chai.request(app)
            .delete('/api/v2/car/:id')
            .set('x-access-token', wrongToken)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user should not be able to delete a specific car ad ', done => {
        chai.request(app)
            .delete('/api/v2/car/:id')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
    it('A user should not be able to view all unsold car ads by price range without authorization', done => {
        chai.request(app)
            .get('/api/v2/range/cars?status=available&minPrice=0&maxPrice=11')
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user should not be able to view all unsold car ads by price range with a wrong token', done => {
        chai.request(app)
            .get('/api/v2/range/cars?status=available&minPrice=0&maxPrice=11')
            .set('x-access-token', wrongToken)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user should not be able to view all unsold car ads by price range', done => {
        chai.request(app)
            .get('/api/v2/range/cars?status=available&minPrice=0&maxPrice=11')
            .set('x-access-token', token)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
    it('A user Should not be able to mark a posted ad as sold with authorization', done => {
        chai.request(app)
            .patch('/api/v2/car/:id/status')
            .send(sold)
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('No access token provided');
            });
        done();
    });
    it('A user Should not be able to mark a posted ad as sold with a wrong token', done => {
        chai.request(app)
            .patch('/api/v2/car/:id/status')
            .set('x-access-token', wrongToken)
            .send(sold)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error')
                    .to.equal('invalid token');
            });
        done();
    });
    it('A user Should not be able to mark a posted ad as sold', done => {
        chai.request(app)
            .patch('/api/v2/car/:id/status')
            .set('x-access-token', token)
            .send(sold)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body)
                    .to.be.an('object')
                    .and.to.have.a.property('error');
            });
        done();
    });
    it('A user Should not be able to update the price of an ad without authorization', done => {
        chai.request(app)
            .patch('/api/v2/car/:id/price')
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
    it('A user Should not be able to update the price of an ad with a wrong token', done => {
        chai.request(app)
            .patch('/api/v2/car/:id/price')
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
    it('A user Should not be able to update the price of an ad ', done => {
        chai.request(app)
            .patch('/api/v2/car/:id/price')
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

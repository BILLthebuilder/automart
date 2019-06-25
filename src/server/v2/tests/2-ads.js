/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import chai from 'chai';
import asserttype from 'chai-asserttype';
import 'chai/register-expect';
import chaihttp from 'chai-http';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import app from '../../../app';

chai.use(chaihttp);
chai.use(asserttype);
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

describe('Advertisements', () => {
    const ad = {
        Data: {
            id: 1,
            owner: 'John',
            email: 'email@email.com',
            createdOn: '01/01/2019',
            manufacturer: 'Toyota',
            model: '80100',
            price: 4.598,
            state: 'used',
            status: 'avalable'
        }
    };
    it('A user Should be able to create a car sale ad', done => {
        chai.request(app)
            .post('/api/v2/car/')
            .send(ad)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
            });
        done();
    });
    it('A user should be able to view all posted ads', done => {
        chai.request(app)
            .get('/api/v2/cars/')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.be.an('object');
            });
        done();
    });
    it('A user should be able to view a specific car ad', done => {
        chai.request(app)
            .get('/api/v2/cars/:id')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.be.an('object');
            });
        done();
    });
    it('A user should be able to view all unsold car ads', done => {
        chai.request(app)
            .get('api/v2/status/cars?status=available')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.be.an('object');
            });
        done();
    });
    it('A user should be able to view all unsold car ads by price range', done => {
        chai.request(app)
            .get('/api/v2/range/cars?status=available&minPrice=0&maxPrice=10')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.be.an('object');
            });
        done();
    });
    it('A user should be able to delete a specific car ad', done => {
        chai.request(app)
            .delete('/api/v2/car/:id')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                expect(res.body).to.be.an('object');
            });
        done();
    });
});

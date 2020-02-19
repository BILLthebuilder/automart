/* eslint-disable no-shadow */
import dotenv from 'dotenv';
import Joi from '@hapi/joi';
import '@babel/polyfill';
import moment from 'moment';
import db from '../db/index';
import { adSchema } from '../middlewares/validations';

dotenv.config();

const ads = {
    async create(req, res) {
        const { error } = Joi.validate(req.body, adSchema);
        if (error) {
            return res.status(400).json({
                status: 400,
                error: error.details[0].message
            });
        }
        const insert = `INSERT INTO cars (owner, createdOn,state, status, price, manufacturer, 
        model, bodyType, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`;
        const results = [
            req.body.owner,
            moment(new Date()),
            req.body.state,
            req.body.status,
            req.body.price,
            req.body.manufacturer,
            req.body.model,
            req.body.bodyType,
            req.body.description
        ];
        try {
            const { rows } = await db.query(insert, results);
            return res.status(201).json({
                status: 201,
                Data: rows[0]
            });
        } catch (error) {
            return res.status(400).json({ error });
        }
    },
    async viewSpecific(req, res) {
        const viewSpecific = `SELECT * FROM cars where id=$1`;
        try {
            const { rows } = await db.query(viewSpecific, [req.params.id]);
            if (!rows[0]) {
                return res.status(404).json({
                    status: 404,
                    error: 'the ad record was not found'
                });
            }
            return res.status(200).json({ Data: rows[0] });
        } catch (error) {
            return res.status(400).json({ status: 404, error });
        }
    },
    async deleteSpecific(req, res) {
        const carAdId = parseInt(req.params.id, 10);
        const deleteSpecific = `DELETE FROM cars WHERE id=$1 returning *`;
        try {
            const { rows } = await db.query(deleteSpecific, [carAdId]);
            if (!rows[0]) {
                return res.status(404).send({
                    status: 404,
                    error: `Car  with id ${req.params.id} not found`
                });
            }
            return res.status(200).json({
                status: 200,
                error: 'car ad was successfully deleted'
            });
        } catch (error) {
            return res.status(400).json({ status: 404, error });
        }
    },
    async viewAll(req, res) {
        const viewAll = `SELECT * FROM cars`;
        try {
            const { rows } = await db.query(viewAll);
            if (!rows[0]) {
                return res.status(404).send({
                    status: 404,
                    error: 'No advert records found'
                });
            }
            return res.status(200).json({
                status: 200,
                Data: rows
            });
        } catch (error) {
            return res.status(400).json({ status: 404, error });
        }
    },
    async viewUnsold(req, res) {
        const value = req.query.status;
        const viewUnsold = `SELECT * from cars WHERE status = $1`;
        try {
            const { rows } = await db.query(viewUnsold, [value]);
            if (!rows[0]) {
                return res.status(404).send({
                    status: 404,
                    error: 'All cars have been sold, please try again'
                });
            }
            return res.status(200).json({
                status: 200,
                Data: rows
            });
        } catch (error) {
            return res.status(400).json({ status: 400, error });
        }
    },
    async viewUnsoldUsed(req, res) {
        const value = req.query.status;
        const value2 = req.query.state;
        const viewUnsoldUsed = `SELECT * from cars WHERE status = $1 AND state = $2`;
        try {
            const { rows } = await db.query(viewUnsoldUsed, [value, value2]);
            if (!rows[0]) {
                return res.status(404).send({
                    status: 404,
                    error: 'All cars have been sold, please try again'
                });
            }
            return res.status(200).json({
                status: 200,
                Data: rows
            });
        } catch (error) {
            return res.status(400).json({ status: 400, error });
        }
    },
    async viewUnsoldPriceRange(req, res) {
        const { minPrice, maxPrice } = req.query;
        const min = Math.min(minPrice, maxPrice);
        const max = Math.max(minPrice, maxPrice);

        const viewUnsoldPriceRange = `SELECT * FROM cars WHERE status=$1 AND price>=$2 AND price<=$3`;

        try {
            const { rows } = await db.query(viewUnsoldPriceRange, [req.query.status, min, max]);
            if (!rows[0]) {
                return res.status(404).send({
                    status: 404,
                    error: 'Please try a different range'
                });
            }
            return res.status(200).json({
                status: 200,
                Data: rows
            });
        } catch (error) {
            return res.status(400).json({ status: 400, error });
        }
    },
    async markSold(req, res) {
        const carId = parseInt(req.params.id, 10);
        const findOneCar = 'SELECT * FROM cars WHERE id=$1';
        try {
            const findCar = await db.query(findOneCar, [carId]);
            if (findCar.rowCount === 0) {
                return res.status(404).send({
                    status: 404,
                    message: `Car with id ${req.params.id} was not found`
                });
            }
            return res.status(200).send({
                status: 200,
                message: `Car with id ${req.params.id} is successfully updated`,
                data: {
                    id: findCar.rows[0].id,
                    email: findCar.rows[0].email,
                    createdOn: findCar.rows[0].createdOn,
                    manufacturer: findCar.rows[0].manufacturer,
                    model: findCar.rows[0].model,
                    price: findCar.rows[0].price,
                    state: findCar.rows[0].state,
                    status: req.body.status
                }
            });
        } catch (err) {
            return res.status(400).json({
                status: 400,
                error: err.message
            });
        }
    },
    async updatePrice(req, res) {
        const adId = parseInt(req.params.id, 10);
        const findAd = 'SELECT * FROM cars where id=$1';
        const foundAd = await db.query(findAd, [adId]);
        if (foundAd.rowCount === 0) {
            return res.status(404).send({
                status: 404,
                error: `The ad with id ${req.params.id} was not found`
            });
        }
        try {
            return res.status(200).send({
                status: 200,
                error: `Advert with id ${req.params.id} is successfully updated`,
                data: {
                    id: foundAd.rows[0].id,
                    email: foundAd.rows[0].email,
                    createdOn: foundAd.rows[0].createdOn,
                    manufacturer: foundAd.rows[0].manufacturer,
                    model: foundAd.rows[0].model,
                    price: req.body.price,
                    state: foundAd.rows[0].state,
                    status: req.body.status
                }
            });
        } catch (error) {
            return res.status(400).send({
                status: 400,
                error: error.message
            });
        }
    }
};

export default ads;

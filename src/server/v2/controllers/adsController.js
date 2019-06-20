import dotenv from 'dotenv';
import '@babel/polyfill';
import moment from 'moment';
import db from '../db/index';

// import Auth from '../helpers/auth';

dotenv.config();

const ads = {
    async create(req, res) {
        if (
            !req.body.state ||
            !req.body.status ||
            !req.body.price ||
            !req.body.manufacturer ||
            !req.body.model ||
            !req.body.bodyType
        ) {
            return res.status(400).json({ message: 'Some values are missing' });
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
                    message: 'the ad record was not found'
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
                    message: `Car  with id ${req.params.id} not found`
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'car ad was successfully deleted'
            });
        } catch (error) {
            return res.status(400).json({ status: 404, error });
        }
    },
    async viewAll(req, res) {
        const viewAll = `SELECT * FROM cars`;
        try {
            const { rows } = await db.query(viewAll);
            return res.status(200).json({ Data: rows });
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
                    message: 'All cars have been sold, please try again',
                    Data: []
                });
            }
            return res.status(200).json({ Data: rows });
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
                    message: 'Please try a different range',
                    Data: []
                });
            }
            return res.status(200).json({ Data: rows });
        } catch (error) {
            return res.status(400).json({ status: 400, error });
        }
    }
};

export default ads;

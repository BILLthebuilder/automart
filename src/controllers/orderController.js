const Joi = require('@hapi/joi');
const moment = require('moment');
const db = require('../db/index');
const { orderSchema } = require('../middlewares/validations');

const orders = {
    async create(req, res) {
        const { error } = Joi.validate(req.body, orderSchema);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            });
        }
        const insert = `INSERT INTO orders (carId, createdOn, status, price, priceOffered) VALUES ($1, $2, $3, $4, $5) returning *`;
        const results = [
            req.body.carId,
            moment(new Date()),
            req.body.status,
            req.body.price,
            req.body.priceOffered
        ];
        try {
            const { rows } = await db.query(insert, results);
            return res.status(201).json({
                Data: rows[0]
            });
        } catch (error) {
            return res.status(400).json({
                error: error.message
            });
        }
    },
    async updatePrice(req, res) {
        const OrderId = parseInt(req.params.id, 10);
        const findOrder = 'SELECT * FROM orders where id=$1';
        const foundOrder = await db.query(findOrder, [OrderId]);
        if (foundOrder.rowCount === 0) {
            return res.status(404).send({
                error: `Order with id ${req.params.id} not found`
            });
        }
        if (foundOrder.rows[0].id === 0) {
            return res.status(404).send({
                error: 'A car with that id does not yet exist. Please try again'
            });
        }
        if (foundOrder.rows[0].status !== 'pending') {
            return res.status(400).send({
                error: 'The order must be pending in order to update price'
            });
        }
        try {
            return res.status(200).send({
                message: `Order with id ${req.params.id} is successfully updated`,
                data: {
                    id: foundOrder.rows[0].id,
                    carId: foundOrder.rows[0].carId,
                    status: foundOrder.rows[0].status,
                    oldPriceOffered: foundOrder.rows[0].price,
                    newPriceOffered: req.body.price
                }
            });
        } catch (error) {
            return res.status(400).send({
                error: error.message
            });
        }
    }
};
module.exports = orders;

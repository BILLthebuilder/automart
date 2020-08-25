import Joi from '@hapi/joi';
import Order from '../models/order';
import { orderSchema } from '../helpers/validations';

const OrderHandler = {
    create(req, res) {
        const result = Joi.validate(req.body, orderSchema);
        if (result.error) {
            return res.status(400).json({
                error: result.error.details[0].message
            });
        }
        const order = Order.create(req.body);
        return res.status(201).json({
            Data: order
        });
    }
};

export default OrderHandler;

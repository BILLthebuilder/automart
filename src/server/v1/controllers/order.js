import Order from '../models/order';

const OrderHandler = {
    create(req, res) {
        const order = Order.create(req.body);
        return res.status(201).json({
            status: 201,
            Data: order
        });
    }
};

export default OrderHandler;

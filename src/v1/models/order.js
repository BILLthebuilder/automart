import moment from 'moment';

class Order {
    constructor() {
        this.orders = [];
    }

    create(data) {
        const newOrder = {
            id: this.orders.length + 1,
            carId: data.carId || 0,
            createdOn: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
            status: data.status || '',
            price: data.price || 0,
            priceOffered: data.priceOffered || 0
        };
        this.orders.push(newOrder);
        return newOrder;
    }
}

export default new Order();

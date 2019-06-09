import moment from 'moment';

class Order {
    constructor() {
        this.orders = [];
    }

    create(data) {
        const newOrder = {
            id: this.orders.length + 1,
            carId: 1,
            email: data.email || '',
            createdOn: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
            status: data.status || '',
            price: 4.567,
            priceOffered: 3.4569
        };
        this.orders.push(newOrder);
        return newOrder;
    }
}

export default new Order();

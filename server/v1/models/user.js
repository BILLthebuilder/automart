import uuid from 'uuid';

class User {
    constructor() {
        this.users = [];
    }

    create(data) {
        const newUser = {
            id: uuid.v4(),
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            email: data.email || '',
            password: data.password || '',
            address: data.address || '',
            isAdmin: true
        };
        this.users.push(newUser);
        return newUser;
    }
}
export default new User();

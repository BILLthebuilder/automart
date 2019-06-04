class User {
    constructor() {
        this.users = [];
    }

    create(data) {
        const newUser = {
            id: data.id,
            email: data.email,
            first_name: data.firstName,
            last_name: data.lastName,
            password: data.password,
            address: data.address,
            isAdmin: data.true
        };
        this.users.push(newUser);
        return newUser;
    }
}

export default new User();

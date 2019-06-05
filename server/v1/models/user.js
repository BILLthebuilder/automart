class User {
    constructor(users = []) {
        this.users = users;
    }

    create(email, firstName, lastName, password, address, isAdmin) {
        const newUser = {
            id: this.users.length + 1,
            email,
            first_name: firstName,
            last_name: lastName,
            password,
            address,
            isAdmin
        };
        this.users.push(newUser);
        return newUser;
    }
}

export default new User();

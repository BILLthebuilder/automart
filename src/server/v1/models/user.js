class User {
    constructor() {
        this.users = [];
    }

    create(data) {
        const newUser = {
            id: this.users.length + 1,
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            email: data.email || '',
            password: data.password || '',
            address: data.address || '',
            isAdmin: data.isAdmin
        };
        this.users.push(newUser);
        return newUser;
    }
}
export default new User();

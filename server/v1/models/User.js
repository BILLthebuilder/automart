class User {
    constructor() {
        this.users = [];
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
// const John = new User();
// John.create('john@gmail.com', 'John', 'Omondi', 'wjnjdasj', '233nairobi', true);
// John.create('pat@gmail.com', 'patrick', 'Omondi', 'wjnjdasj', '233nairobi', false);
// John.create('stacy@gmail.com', 'John', 'Omondi', 'wjnjdasj', '233nairobi', true);
// console.log(John);

export default new User();

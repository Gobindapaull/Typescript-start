class Users {
    addUser(user) {
        return `${user}`;
    }
    deleteUser() {
        return "delete user";
    }
}

const u1 = new Users();

console.log(u1.addUser("Test User"));
console.log(u1.deleteUser());

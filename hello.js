var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var userObject = {
    firstName: 'yu',
    lastName: 'jx'
};
console.log(greeter(userObject));
var userClass = new User('yu', 'jx');
console.log(greeter(userClass));

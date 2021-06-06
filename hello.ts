class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}
interface Person {
    firstName: string
    lastName: string
}
function greeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName
}

let userObject = {
    firstName:  'yu',
    lastName: 'jx'
}

console.log(greeter(userObject))

let userClass = new User('yu', 'jx')
console.log(greeter(userClass))
// number
let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLIteral: number = 0o24

// string
let nameString: string = 'bob'
nameString = 'smith'

// array
let list: number[] = [1,2,3]
let listArray: Array<number> = [1,2,3]

// tuple
let t: [string, number]
t = ['hello', 10]
// error t = [10, 'hello']
console.log(t[0].substr(1))
console.log(t);

// enum

enum Color {
    Red,
    Green,
    Blue
}

let c:Color = Color.Red
let colorName: string = Color[2]

// any

let notSure: any = 4
notSure = 'may a string instead'
notSure = false

// void
function warnUser(): void {
    console.log('This is my waring message')
}

let unusable: void = undefined
let unusable1: void = null

// never
function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error('something failed')
}

function inifiniteLoop(): never {
    while(true) {

    }
}

// object

declare function create(o: object | null): void;

create({prop: 0})
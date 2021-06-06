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


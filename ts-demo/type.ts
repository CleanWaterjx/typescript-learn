export {}
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

let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a
a = ro as number[]

// index types
//TypeScript支持两种索引签名：字符串和数字。可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// error：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
//编译OK
interface Okay {
    [x: number]: Dog;     //Dog是Animal子类
    [x: string]: Animal;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // length是number类型
    // name: string       // error，`name`的类型与索引类型返回值的类型不匹配
}

// 混合类型
interface Counter {
    (start: number): string
    interval: number
    reset(): void
  }
  
  function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter
    counter.interval = 123
    counter.reset = function () { }
    return counter
  }
  
  let count = getCounter()
  count(10)
  count.reset()
  count.interval = 5.0
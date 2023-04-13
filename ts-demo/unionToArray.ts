// https://stackoverflow.com/questions/44480644/string-union-to-string-array
const ALL_SUITS = ['hearts', 'diamonds', 'spades', 'clubs'] as const;
type SuitTuple = typeof ALL_SUITS; // readonly ['hearts', 'diamonds', 'spades', 'clubs']
type Suit = SuitTuple[number];


// tuple 转 union ，如：[string, number] -> string | number
// https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B
type TTuple = [string, number];
type TArray = Array<string | number>;

type Res = TTuple extends TArray ? true : false; // true
type ResO = TArray extends TTuple ? true : false; // false

type ElementOf<T> = T extends Array<infer E> ? E : never;


type ToUnion = ElementOf<TTuple>; // string | number

type Res1 = TTuple[number]; // string | number
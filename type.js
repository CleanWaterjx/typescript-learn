// number
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLIteral = 20;
// string
var nameString = 'bob';
nameString = 'smith';
// array
var list = [1, 2, 3];
var listArray = [1, 2, 3];
// tuple
var t;
t = ['hello', 10];
// error t = [10, 'hello']
console.log(t[0].substr(1));
console.log(t);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
var colorName = Color[2];
// any
var notSure = 4;
notSure = 'may a string instead';
notSure = false;

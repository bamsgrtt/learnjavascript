// convert to String
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);

// Convert to Number
const strNumber2 = '123';
const strFloat = '3.14';
const boolean2 = true;

const numFromString = Number(strNumber2);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean2);

// Convert ParsInt
const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

// convert ParseFloat
const cm2 = '20.55cm';
const px2 = '64.23px';

const floatFromCM = parseFloat(cm2);
const floatFromPX = parseFloat(px2);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

// convert to Boolean
const number3 = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(number3);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false
let score = "33"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);

let IsLoggedIn = 1
let BooleanLoggedIn = Boolean(IsLoggedIn)
console.log ( BooleanLoggedIn);

let number = 33
let string = "tasveer"
console.log( `my number is ${number} my name is ${string}`);

const GameName = new String ('tasveer')
console.log(GameName[0]);
console.log(GameName.__proto__);
console.log(GameName.length);
console.log(GameName.charAt(3));
console.log(GameName.indexOf('v'));
const newString = GameName.substring(1,4)
console.log(newString)
const anotherString = GameName.slice(4,7 )
console.log(anotherString);

const newStringOne = "    tasveer   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url =  "http://tasveer.com/tasveer%20fatema"
console.log(url.replace('%20' , '-'));
console.log( url.includes('tasveer'));

console.log(GameName.split('-'));
console.log("tasveer");
const accountId = 1234567
let accountEmail = "tasveerfatama@gmail.com"
var accountPassword = "12345"
accountCity = " jaipur"
let accountState;
// accountId = 4
// console.log(accountId);  // not allowed

console.log(accountId);

accountEmail ="varun@gmail.com"
accountCity = "Bengaluru"
accountPassword = "21223244"

console.table([accountPassword,accountEmail,accountCity,accountId, accountState])

let name = "hitesh"
let age=18
let isLoggedIn = false
let state;

console.log(typeof isLoggedIn);
let score = "3333"

console.log(typeof score);
let valueInNumber = Number(score)
console.log( typeof valueInNumber);


let value = 3
let negvalue = -value
console.log(negvalue);

//add string 

let str1 = "varun "
let str2 = "tasveer"

let str3 = str1+str2
console.log(str3);

//coparision

console.log("2">1);
console.log("2">1);
console.log("2">1);
console.log(null >= 0);
console.log(null == 0);
console.log(null > 0);
console.log(undefined >= 0);
console.log(undefined == 0);
console.log(undefined > 0);

// === 

console.log("2"=== 2);


//REference (non primitve)
// Array, objects , Functions

const heros = ["shaktiman","gandhi","doga"];

let myObj = {
    name : "tasveer",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

// stack

let myyouTubeName = "tasveerofficial"
let anothername = myyouTubeName
anothername = "chaiaurcode"

console.log(anothername);

console.log(myyouTubeName);

// Heap 
let user = {
    email : "tasveerfatema@gmail.com",
    upi: "tasveer@ybl"
}

let userTwo = user

user.email ="tassujaan@gmail.com"

console.log(user.email);
console.log(userTwo.email);

//String 
let Name = "tasveer"
let repocount = 50

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName  = new String('tasveer')

console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.indexOf('t'));
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);


// for removing gap
const newStringone = "    hitesh  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://tasveer.com/tasveer%20fatama"
console.log(url.replace('%20', '-'));
console.log(url.includes('tasveer'));
console.log(url.includes('https'));







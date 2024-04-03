const myarr=[1,2,3,4,5,]
console.log(myarr[3]);

// array methods

myarr.push(6)
myarr.pop()
myarr.unshift(9)
myarr.shift()
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));

const newarr =myarr.join()
console.log(myarr);
console.log(newarr);

// slice splice 

console.log("A",myarr);
const mynewarr = myarr.slice(1,3)

console.log(mynewarr);
console.log("B" , myarr);

const mynewarr2 =myarr.splice(1,3)
console.log("c", myarr);
console.log(mynewarr2);


const marval_heros = ["thor" ," Ironman", "spiderman"]
const dc_heros = ["superman", "flash", " batman"]

//marval_heros.push(dc_heros)
//console.log(marval_heros);

const allHeros = marval_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marval_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6,7,8] ,9,[6,7,[4,5]]]
const real_heros = another_array.flat(Infinity)
console.log(real_heros);

console.log(Array.isArray("tasveer"));
console.log(Array.from("tasveer"));
console.log(Array.from({name:"tasveer"}));

let score1 = 100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));
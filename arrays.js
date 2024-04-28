const myArr = [0,7,5,4,3,true,]
console.log(myArr[1]);

//Array methods 

myArr.push(6)
console.log(myArr);
myArr.pop(6)
console.log(myArr);
myArr.unshift(6)
console.log(myArr);
myArr.shift(6)
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

//slice , splice 
 
console.log("A", myArr);
const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("A", myArr);
const myn2 = myArr.splice(1,4)
console.log(myn2);

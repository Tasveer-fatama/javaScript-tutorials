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
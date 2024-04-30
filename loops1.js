// Arrays specific loop 


const arr = [1,2,3,4,5,6,7]
 for (const num of arr) {
    console.log(num);
 }

 const greetings = "hello word"
 for (const greet of greetings) {
    console.log(greet);
 }

 // maps 

 const map =new Map()
 map.set('IN',"india")
 map.set('USA',"United states of america")
 map.set('FR',"france")
 

 console.log(map);


 const myObject = {
    name:"tasveer",
    class: "six",
    language : "c++"
 }

 //forin loop in object
 for (const key in myObject) {
   console.log(myObject[key]);
 }

 // forin loop in array
 const programming = ["js", "rb","py","java","cpp"]

//  for (const key in programming) {
//    console.log(programming[key]);
//  }

//  const coding = ["js", "rb","py","java","cpp"]
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// [{}, {},{},{}]

const mycoding =[
    {
        name: "tasveer",
        frind : "sachin"
    },
    {
        name: "tasveer",
        frind : "sachin"
    },
    {
        name: "tasveer",
        frind : "sachin"
    },
    {
        name: "tasveer",
        frind : "sachin"
    }
]
mycoding.forEach((item)=>{
    console.log(item.name);
})
// filter
const mynums = [1,2,3,4,5,6,7,8,9]
 const  newnum = mynums.filter((num)=> num >=5)
 console.log(newnum);

 //map

 const mynumbers = [1,2,3,4,5,6,7,8]

 const newnumbers = mynumbers.map((num)=>num+10)
 console.log(newnumbers);


 //reduce 
 const array1 = [1,2,3,4,5,6]

 const mytotalarr = array1.reduce(function(acc,currval){
    return acc+currval
 },0)
 console.log(mytotalarr);
 


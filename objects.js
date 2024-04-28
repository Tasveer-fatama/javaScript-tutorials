 const  mysym = "mykey1"
 
 const jsuser = {
    name: "tasveer",
    age : 21,
    [mysym]: "mykey1",
    location : "jaunpur",
    email : "tasveerfatema135@gmail.com"
}

console.log(jsuser["email"])
console.log(jsuser.email)
console.log(jsuser[mysym])
// iske baad changes nhi kr sakty hai
// Object.freeze(jsuser)

jsuser.greeting = function(){
    console.log(`hello js user , ${this.email}`);
}

console.log(jsuser.greeting());




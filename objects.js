const mysym=Symbol("key1")


const user = {
    name : "tasveer ",
    age: 21,
    [mysym] : "key1",
    location : "jaipur",
    email:"tasveerfatema@gmail.com",
    IsLoggedIn: false,
    lastLoginDays:["monday","saturday"]
}

console.log(user.email);
console.log(user["email"]);
console.log(user[mysym]);

user.email="tasveerfatema135@gmail.com"
//Object.freeze(user)
//user.email = "tasveerfatema140@gmail.com"
//console.log(user);


user.greeting = function(){
    console.log(`hello user, ${this.name} `);
}
console.log(user.greeting());


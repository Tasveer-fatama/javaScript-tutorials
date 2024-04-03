const instauser = {}

instauser.id ="123tassu"
instauser.name = "tasveer"
instauser.isLoggedIn = false 
console.log(instauser);

const regularUser = {
    email : "tasveerfatema@gmail.com",
    fullname:{
        userfullname:{
            firstname : " tasveer",
            lastname : " fatama"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b", }
const obj2 = { 3: "a", 4: "b", }

const obj3 = {... obj1,...obj2}
console.log(obj3);


const users = [
    {
        id : 1,
        email: "tasveer@gmail.com"
    },
    {
        id : 1,
        email: "tasveer@gmail.com"
    },
    {
        id : 1,
        email :  "tasveer@gmail.com"
    },
]

console.log(users[1].email ); 

console.log(instauser);
console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));

console.log(instauser.hasOwnProperty('isLoggedIn'));
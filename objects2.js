// const user = new Object ()
const user = {}
user.id ="1234"
user.email= "neha@gmail.com"
user.isLoggedin = false

console.log(user);

const myuser = { 
    fullname : {
        userfullname : {
            firstname : "tasveer",
        lastname : "fatama" 
        }
    }
}

console.log(myuser.fullname);

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "c" , 4:"d"}

// const obj3 = { obj1,obj2}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);


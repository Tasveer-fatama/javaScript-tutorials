// immediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB COONECT`);
})();
((name)=>{
    console.log(`DB COONECT ${name}`);
})('tasveer');

// Arrow

const user = {
    username : "tasveer",
    price : 999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome our site` );
    }
}
user.welcomemessage()
user.username = "tassu"
user.welcomemessage()

//arrow
 
// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
const addtwo = (num1,num2)=>({username:"tassu"})



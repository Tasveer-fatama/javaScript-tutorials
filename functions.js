function saymyname(){
    console.log("T");
    console.log("a");
    console.log("s");
    console.log("v");
    console.log("e");
    console.log("e");
    console.log("r");
}
saymyname()

function addTwonumber (number1,number2){
    console.log(number1+number2);
}
addTwonumber(4,5)

function addTwonumber (number1,number2 ){
   let result= number1+number2
   console.log(result);
   return result
}
addTwonumber(9,4)
//  const result = addTwonumber(4,5)
// console.log("result:",result);

function login(username){
    return `${username} just logged in `
}
console.log(login("neha"));


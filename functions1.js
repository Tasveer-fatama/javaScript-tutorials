//rest operater 

function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,500));

// Array in function 

const myarray = [200,400,500,]


function returnSecondValue(getarray){
    return getarray[2]
}
console.log(returnSecondValue(myarray));

// object in function 
function handleObject(anyobject){
    console.log(`user name is ${anyobject.name} and contact is ${anyobject.contact}`);
}
 handleObject({
    name : "tasveer",
    contact : 7266955930
})
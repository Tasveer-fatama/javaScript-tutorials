let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let currentDate = new Date ("01-14-2023")
console.log(currentDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(currentDate.getTime());
console.log(Math.floor (Date.now()/1000));

let newDates= new Date()
console.log(newDates);
console.log(newDates.getMonth());
console.log(newDates.getDay());
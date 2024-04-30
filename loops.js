// For loop 

for (let index = 0; index <=10; index++) {
    const element = index;
    if(element==5){
        console.log("five is best number ");
    }
    console.log(element);
    
}

for (let index = 0; index <=10; index++) {
    console.log(`outer loop value: ${index}`);
    
    for (let j = 0; j<10; j++) {
        console.log(index*j);
       
        
    }


    let myarray = ["neha","riya","farheen"]
    for (let index = 0; index < myarray.length; index++) {
        const element = myarray[index];
        console.log(element);
    }
    
}

// break and continue 

for (let index = 1; index <20; index++) {
    if (index==5) {
        console.log("break");
        continue;
    }
    console.log(`value of i is ${index}`);
    
}

// while and do while loop 
let index=0
while (index<=10) {
    console.log(` value of index is ${index}`);
    index=index+2
}

let myarr =["tasveer", "fatama", "rubina"]
let arr=0
while (arr<myarr.length) {
    console.log(`value is ${myarr[arr]}`);
    arr=arr+1
    
}

// do while loop 
let score = 1
do {
   console.log(`score is ${score}`);
   score++ 
} while (score<=10);


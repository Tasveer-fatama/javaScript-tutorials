// let a = 100
// const b = 20 
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// local scop and global scop 


// nested scop

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



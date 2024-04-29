// immediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB COONECT`);
})();
((name)=>{
    console.log(`DB COONECT ${name}`);
})('tasveer');
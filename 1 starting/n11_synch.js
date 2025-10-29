const fs = require("fs"); 

console.log("1"); 
console.log("2"); 


//!this is an asynchronous task so main thread is not blocked , this is assigned to the libuv threads which executes this parellely along with
// the main thread 
fs.readFile("./n8_fs.js" , "utf-8" , (error , result) =>{ 
    if(error){
        console.log(error);
    }
    else {
        console.log(result);
    }
});

//execution of the code is not blocked 
console.log("3"); 
console.log("4"); 

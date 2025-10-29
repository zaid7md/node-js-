const fs = require("fs"); 

console.log("1");
console.log("2");
const result = fs.readFileSync("./n8_fs.js" , "utf-8");//!main thread is used over here so the remainig code will have to wairt 
console.log(result); 
console.log("3");
console.log("4");



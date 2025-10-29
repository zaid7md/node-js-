const fs = require("fs"); 

fs.writeFileSync("./n8_fs.js" , "file created using fs module"); 

fs.writeFile("./n8_fs.js", "changing the file content using writefile fs function" , (err) => {}); 

//synchronous function returns something , but asynchronous dont ; 
//asynchornous use callback functions only 

const fs1 = fs.readFileSync("./n8_fs.js" , "utf-8");
console.log(fs1);

fs.readFile("./n8_fs.js" , "utf-8" , (err,res) =>{
    if(err){
        console.log(err); 
    }
    else {
        console.log(res);
    }
});

fs.appendFileSync("./n8_fs.js" , "Hellow");

// fs.cpSync() -> copy a file 
// fs.unlinkSync() -> delete a file 
// fs.statSync() -> view the stats of a file 
// fs.mkdirSync() 
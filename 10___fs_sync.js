const { readFileSync , writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt","utf-8")


writeFileSync("./content/result_sync.txt",`here is the result : ${first} , ${second}`)

const { readFile , writeFile } = require("fs");
//Async 
readFile("./content/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})






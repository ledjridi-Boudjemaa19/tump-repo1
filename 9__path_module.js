const path = require("path")
console.log(path.sep)

const filePath= path.join("/content/","subfolder","test.txt")
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

//path.resolve=> absolute path 
const absolute =path.resolve(__dirname,"content","sub_folder","test.txt");
console.log(absolute);


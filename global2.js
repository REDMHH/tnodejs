const path = require("path");

console.log(__dirname);

console.log(__filename);
console.log(`the file name is ${path.basename(__filename)}`);

console.log(process.argv);

//for (let key in global){
//	console.log(key);
//}

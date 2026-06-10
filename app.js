console.log("hello node .js");
const name = "Abhishek";
const age = 21;

console.log(name);
console.log(age);

function greet(name){
   return `Hello ${name}`;
}

// console.log(greet("Abhishek"));


/// file banana fs se
// const fs= require("fs");
//  console.log(fs);
//  fs.writeFileSync("notes.txt","hello Backend");

// const fs = require("fs");

// fs.writeFileSync("notes.txt","Hello Backend");

// console.log("File Created");

// const fs = require("fs");
// fs.writeFileSync("tradex.txt","tradex Backend journey started");
// console.log("file craeted");
// // read krnsa
// const data= fs.readFileSync("tradex.txt","utf8");
//  console.log(data);

//  // file append krna 
//  fs.appendFileSync("tradex.txt","\n learning node.js");
//  fs.readFileSync("tradex.txt","utf8");

// const fs= require("fs");
// fs.mkdirSync("notes");

// const fs= require("fs");
// const files= fs.readdirSync("notes");
// console.log(files);
// const fs= require("fs");
//  const files= fs.readdirSync("notes");
//  console.log(files);

// const fs= require("fs");
//  fs.unlinkSync("notes/test.txt");
// console.log(__dirname);

const fs= require("fs");
const path= require("path");
console.log(__dirname);
const filepath= path.join(__dirname,"notes","note2.txt");
fs.readFileSync(filepath,"utf-8");

// const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.userInfo());
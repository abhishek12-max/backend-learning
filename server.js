// const http= require("http");

// const server= http.createServer((req,res)=>{
//     res.end("hello backend");
// })

// server.listen(3000);

// const http = require("http");

// const server = http.createServer((req,res)=>{

//    console.log(req.url); /// ye btata hai user kis route pe gya hai

//    res.end("TradeX Server Running");

// });

// server.listen(3000);

//  const http= require("http");
//  const server= http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("welcome to abhishek portfolio");
//     }else if (req.url==="/about"){
//         res.end("iam mern stack developer");
//     }else if(req.url==="/projects"){
//         res.end("tradeX project comming soon ");
//     }else{
//         res.end("404 page not found");
//     }
//  });

//  server.listen(3000);
const express= require("express");
 const app= express();
 require("./config/db");
 app.use(express.json());
const studentRoutes= require("./routes/studentsRoutes");
 app.use("/students",studentRoutes);
 app.listen(3000,()=>{
    console.log("port at 3000");
 });

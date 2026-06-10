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

 const http= require("http");
 const server= http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("tradeX home page");
    }else if (req.url==="/about"){
        res.end("tradeX about page");
    }else if(req.url==="/contact"){
        res.end("tradeX contact page");
    }else{
        res.end("404 page not found");
    }
 });

 server.listen(3000);

const express= require("express");
const app= express();

app.listen(3000,(req,res)=>{
    console.log("server start at port 3000");
})

// app.get("/",(req,res)=>{
//     res.send("welcome home");
// });

// app.get("/about",(req,res)=>{
//     res.send("welcome about");
// });

// app.get("/contact",(req,res)=>{
//     res.send("welcome contact");
// });

// app.get("/user/:id",(req,res)=>{

//    res.send(req.params.id);

// });

// app.get("/user",(req,res)=>{

//    res.send(req.query.name);
   

// });

// app.get("/user",(req,res)=>{

//    console.log(req.query);

//    res.send("Done");

// });

// middleware request and route ke beech ka security guard

// app.use((req,res,next)=>{
//      console.log("request recevied");
    
// });

// app.get("/",(req,res)=>{
//     res.send("welcome tradex");
// });

app.use((req,res,next)=>{

   console.log("Middleware 1");

   next();

});

app.use((req,res,next)=>{

   console.log("Middleware 2");

   next();

});

app.get("/",(req,res)=>{

   res.send("Home");

});
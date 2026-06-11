// const express= require("express");
// const app= express();

// app.use(express.json());
 //  data read krne ke loye use hota hai data kis form mai hai or req.body jb use hoga toh express.json() zarror lgana vrna undefined print hoga

//  const users=[]; //temporary database hai 

// app.post("/signup",(req,res)=>{

//     const{fullname,email,password}=req.body
//     if(!fullname||!email||!password){
//        return res.status(400).send("all field required");
//     } 


//     const user= users.find((item)=>{
//        item.email===email
//     })

//     users.push({
//       fullname,
//       email,
//       password
//     });

//     res.status(201).send("signup successfull")
// });

// app.listen(3000,(req,res)=>{
//     console.log("server start at port 3000");
// })

// app.get("/users",(req,res)=>{

//    res.json(users); // data users ka json form mai hai isliye

// });

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

// app.use((req,res,next)=>{

//    console.log("Middleware 1");

//    next();

// });

// app.use((req,res,next)=>{

//    console.log("Middleware 2");

//    next();

// });

// app.get("/",(req,res)=>{

//    res.send("Home");

// });

// task 1

// const student=[];

// app.post("/student",(req,res)=>{
//     const{name,course}=req.body;
//     student.push({
//       name,
//       course
//     });
//      res.send("added")
// })
// app.listen(3000,(req,res)=>{
//     console.log("server start at port 3000");
// })
// app.get("/students",(req,res)=>{
//      res.json(student)
// })

// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use((req,res,next)=>{

//     console.log("New Request Aayi");

//     next();

// });
// const students=[];

// app.post("/students", (req, res) => {
//     students.push(req.body);
//     console.log(students);
//     res.send("student added");
// });


// app.get("/students",(req,res)=>{
//     res.json(students);
// });

// app.delete("/students/:id",(req,res)=>{
//     const id= Number(req.params.id);
//     const updatestudent= students.filter((item,index)=>{
//         return item.id!==id;
//     })
//       students.length=0;
//      students.push(...updatestudent);
//      res.send("deleted");
// });

// app.patch("/students/:id",(req,res)=>{
    
//    const id= Number(req.params.id);
//     const student= students.find((item)=>(
//         item.id===id
//     ));

//     student.course= req.body.course;
    
//    res.send("student update");
// });

// app.listen(3000, () => {
//     console.log("Server Running on Port 3000");
// });


// validate middleware

// const express= require("express");
// const app= express();
// app.use(express.json());
// const students=[];

// function validatestudent(req,res,next){
//      const{name,course}= req.body;
//      if(!name||!course){
//         return  res.send("name and field required");
//      }
//      next();
// }
// app.post("/students",validatestudent,((req,res)=>{
//      students.push(req.body);
//      res.send("student added");

// })
// )

// app.get("/students",(req,res)=>{
//      res.json(students);
// });

// app.listen(3000,()=>{
//    console.log(" server port at 3000");
// })



const express = require("express");
 const app= express();
  app.use(express.json());

// task 1

  app.get("/hello",(req,res)=>{
       res.json("hello abhishek");
  });


   app.get("/search",(req,res)=>{
       const course= req.query.course;
       res.json({
          "course": course
       })
  })

  app.get("/square/:num",(req,res)=>{
        const num= Number(req.params.num);
        const sqr = num*num
        res.json({
           "number":num,
           "square": sqr
        });
  })

  function validatestudent(req,res,next){
       const{name}= req.body;
       if(!name){
         return res.send("name is requied")
       }
       next();
  }
   app.post("/user", validatestudent,(req,res)=>{
   console.log(req.body);
        res.json({
          "message":"user added",
          "name": req.body.name,
          "age": req.body.age
        })
  })

  app.listen(3000);

  
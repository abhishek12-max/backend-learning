const express= require("express");
const app= express();
app.use(express.json());
const students=[];

app.post("/students",(req,res)=>{
     students.push(req.body);
     res.send("student added");
})

app.get("/students",(req,res)=>{
     res.json(students);
})

app.get("/students/search",(req,res)=>{
      const {name}= req.query
       const searchstudent= students.find((item)=>{
           return item.name===name
       })
         res.json(searchstudent);
});
app.get("/students/:id",(req,res)=>{
     const id = Number(req.params.id);
     const specificstudent= students.find((item)=>(
         item.id===id
     ))
      res.json(specificstudent);
    
})


app.get("/total",(req,res)=>{
     res.json({
        total: students.length
     })
})

app.listen(3000,()=>{
    console.log("server start at port 3000");
})


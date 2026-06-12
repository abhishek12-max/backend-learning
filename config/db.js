const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/studentDB")
.then(()=>{
    console.log("mongodb connected")
})
.catch((err)=>{
    console.log(err);
})
const mongoose= require("mongoose");
 const studentschema= new mongoose.Schema({
    name: String,
    course: String
 })

 const student= mongoose.model("student",studentschema);
 module.exports= student;

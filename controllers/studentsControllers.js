

// ye array mai save hora hai yaha fakedatabase bnaya hai 

// const students=[];
// const getstudents= ((req,res)=>{
//      res.json(students);
// });

// const addstudents=((req,res)=>{
//       students.push(req.body);
//       res.send("student added");
// })

// const getstudentbyid=((req,res)=>{
//         const id= Number(req.params.id);
//     const specifcstudent= students.find((item)=>(
//          item.id===id
//     ));
//       if(specifcstudent){
//          return res.json(specifcstudent);
//       }else{
//         res.json("student not found")
//       }
// });

// const deletestudentbyid = ((req,res)=>{
//     const id= Number(req.params.id);
//     const student= students.find((item)=>(
//         item.id===id
//     ))
//       if(student){
//          const updatestudent= students.filter((item)=>(
//              item.id!==id
//          ))
//            students.length=0;
//            students.push(...updatestudent);
//            res.json("deleted student");
//       }else{
//         return res.json("student not found");
//       }
// })

// const updatestudent= ((req,res)=>{
//       const id= Number(req.params.id);
//       const student= students.find((item)=>(
//         item.id===id
//       ))
//        if(student){
//             student.course= req.body.course
//           return  res.json("student update")
//        }else{
//          return res.json("student not found")
//        }
// })

// module.exports={
//     getstudents,
//     addstudents,
//     getstudentbyid,
//      deletestudentbyid,
//      updatestudent
// }

// real mongodb mai save hoga data

const student = require("../models/student");


 const addstudents = async (req,res) => {
       await student.create(req.body);
       res.send("student added");
 }
    
 const getstudents = async (req,res) => {
     const students=  await student.find()
     res.json(students);
 }

 const getstudentbyid= async (req,res) => {
      const id= req.params.id;
      const specificstudent=  await student.findById(id);
        if(specificstudent){
            res.json(specificstudent)
        }else{
            res.json("student not found")
        }
 }

 const updatestudent = async (req,res) => {
    const id= req.params.id;
     await student.findByIdAndUpdate(id,{
         course:req.body.course
    })
     res.json("student update");
 }

 const deletestudentbyid = async (req,res) => {
     const id= req.params.id;
     const deletedstudent= await student.findByIdAndDelete(id);
     if(deletedstudent){
        res.send("deleted")
     }
 }

module.exports = {
   addstudents,
   getstudents,
   getstudentbyid,
   updatestudent,
   deletestudentbyid
};
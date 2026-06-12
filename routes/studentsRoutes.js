const express = require("express");
const router = express.Router();
const {addstudents,getstudents,getstudentbyid,updatestudent,deletestudentbyid} = require("../controllers/studentsControllers");

router.post("/",addstudents);
router.get("/",getstudents);
router.get("/:id",getstudentbyid);
router.patch("/:id",updatestudent);
router.delete("/:id",deletestudentbyid);

module.exports = router;
 
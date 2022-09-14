const express=require("express")
const router=express.Router();
const CollegeController = require("../Controllers/collegeController")
const InternController = require("../Controllers/InternController")




router.post('/functionup/colleges', CollegeController.createCollege)

router.post('/functionup/interns', InternController.createIntern )

router.get('/functionup/collegeDetails', CollegeController.getColleges)

module.exports=router
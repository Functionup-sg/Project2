const express=require("express")
const router=express.Router();
const CollegeController = require("../Controllers/collegeController")
const InternController = require("../Controllers/InternController")



//_________________POST API FOR COLLEGE_________________
router.post('/functionup/colleges', CollegeController.createCollege)

//_________________POST API FOR INTERNS_________________
router.post('/functionup/interns', InternController.createInterns)

//_________________GET API FOR COLLEGE DETAILS_________________
router.get('/functionup/collegeDetails', CollegeController.getCollegeDetails)

module.exports=router
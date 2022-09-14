
let collegeModel = require('../Models/CollegeModel')
const InternModel = require('../Models/InternModel')
let { isValidreqbody, isValid, isValidName, isValidFName, isValidUrl } = require('../Validator/validation')

let createCollege = async function (req, res) {

   try {
      data = req.body

      const { name, fullname, logolink } = data

      if (!isValidreqbody(data)) {
         return res.status(400).send({ status: false, msg: " PLEASE PROVIDE DATA" })
      }
      if (!isValid(name)) { return res.status(400).send({ status: false, msg: " NAME MUST BE REQUIRED" }) }
      if (!isValidName(name)) { return res.status(400).send({ status: false, msg: " PLEASE PROVIDE VALID NAME" }) }

      if (!isValid(fullname)) { return res.status(400).send({ status: false, msg: " FULLNAME MUST BE REQUIRED" }) }
      if (!isValidFName(fullname)) { return res.status(400).send({ status: false, msg: " PLEASE PROVIDE VALID FULLNAME" }) }

      if (!isValid(logolink)) { return res.status(400).send({ status: false, msg: " logolink MUST BE REQUIRED" }) }
      if (!isValidUrl(logolink)) { return res.status(400).send({ status: false, msg: " PLEASE PROVIDE VALID logolink" }) }

      let saveData = await collegeModel.create(data)
      return res.status(201).send({ status: true, data: saveData })

   }
   catch (error) {
      console.log(error)
      return res.status(500).send({ msg: error.message })

   }
}

const getCollegeDetails = async function (req, res) {
   const collegeName = req.query.collegeName;
   if (!collegeName) {
      return res.status(400).send({ status: false, msg: "collegeName can't be empty" })
   }
   try {
      const college = await collegeModel.findOne({ name: collegeName });
      if (!college) {
         return res.status(400).send({ status: false, msg: "College not found" })
      }
      const interns = await InternModel.find({
         collegeID: college._id
      }, { _id: 1, name: 1, mobile: 1, email: 1 }); // projection
      return res.status(200).send({
         data: {
            name: college.name,
            fullname: college.fullname,
            logolink: college.logolink,
            interns,
         }
      })
   } catch (error) {
      return res.status(500).send({ status: false, msg: "Something went wrong" })
   }

}

module.exports.createCollege = createCollege
module.exports.getCollegeDetails = getCollegeDetails
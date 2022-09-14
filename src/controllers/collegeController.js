
let collegeModel = require('../Models/CollegeModel')
let { isValidreqbody, isValid, isValidName,isValidFName,isValidUrl } = require('../Validator/validation')

let createCollege = async function (req, res) {
  
   try {
    data = req.body

     const {name, Fullname, logolink} = data

     if(!isValidreqbody(data)){
        return res.status(400).send({status:false, msg:" PLEASE PROVIDE DATA"})
     }
    if(!isValid(name)){ return res.status(400).send({status:false, msg:" NAME MUST BE REQUIRED"})}
   if (!isValidName(name)){return res.status(400).send({status:false, msg:" PLEASE PROVIDE VALID NAME"})}
      
   if(!isValid(Fullname)){ return res.status(400).send({status:false, msg:" FULLNAME MUST BE REQUIRED"})}
   if (!isValidFName(Fullname)){return res.status(400).send({status:false, msg:" PLEASE PROVIDE VALID FULLNAME"})}

   if(!isValid(logolink)){ return res.status(400).send({status:false, msg:" logolink MUST BE REQUIRED"})}
   if (!isValidUrl(logolink)){return res.status(400).send({status:false, msg:" PLEASE PROVIDE VALID logolink"})}
   
   let saveData = await collegeModel.create(data)
   return res.status(201).send({status:true, data:saveData})
   
   }
   catch (error) {
      console.log(error)
      return res.status(500).send({ msg: error.message })

   }
}

module.exports.createCollege=createCollege
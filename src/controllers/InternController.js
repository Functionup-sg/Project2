const collegeModel = require('../Models/CollegeModel')
const internModel = require('../Models/InternModel')
const { isValidreqbody, isValid, isValidName, isValidMobile, isValidEmail } = require('../Validator/validation')



//_________________ CREATE API FOR INTERNS_________________

const createInterns = async function (req, res) {
    try {
        
        const { collegeName, name, mobile, email } = req.body

        const college = await collegeModel.findOne({ name: collegeName, isDeleted:false });
        if (!college) {
            return res.status(400).send({ status: false, msg: "College not found" })
        }

        if (!isValidreqbody) { return res.status(400).send({ status: false, msg: "Body should not be empty " })}

        if (!isValid(collegeName)) {return res.status(400).send({ status: false, msg: "collegeName can't be empty" }) }

        if (!isValid(name)) {return res.status(400).send({ status: false, msg: "name can't be empty" })}

        if (!isValidName(name)) {return res.status(400).send({ status: false, msg: "please provide a valid name" })}

        if (!isValid(mobile)) {return res.status(400).send({ status: false, msg: "mobile can't be empty" })}

        if (!isValidMobile(mobile)) {return res.status(400).send({ status: false, msg: "please provide a valid mobile" })}

        if (!isValid(email)) {return res.status(400).send({ status: false, msg: "email can't be empty" })}

        if (!isValidEmail(email)) {return res.status(400).send({ status: false, msg: "please provide a valid email" })}

         let findintern= await internModel.findOne({email:email})
         if(findintern) {return res.status(400).send({ status: false, msg: " email already exists" })}

         let checkuniqueNo = await internModel.findOne({ mobile: mobile })
         if (checkuniqueNo) {return res.status(400).send({ status: false, msg: "Pls Enter Unique Mobile No." })}


       const collegeId = college._id

        // const dataOfIntern = {name, email, mobile, collegeId } 

        // let savedData = await internModel.create(dataOfIntern)
        // return res.status(201).send({
        //     status: true,
        //     data: {
        //         isDeleted: savedData.isDeleted == false,
        //         name: savedData.name,
        //         email: savedData.email,
        //         mobile: savedData.mobile,
        //         collegeId: savedData.collegeId
        //     }
        // })

        const createdData = await internModel.create({ name, mobile, email, collegeID:college._id })
        return res.status(200).send({  data: {
                isDeleted: createdData.isDeleted == false,
                name: createdData.name,
                email: createdData.email,
                mobile: createdData.mobile,
                collegeId: createdData.collegeId
            } })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ msg: error.message })
    }
} 

module.exports.createInterns = createInterns 
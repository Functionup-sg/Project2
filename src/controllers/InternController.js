const collegeModel = require('../Models/CollegeModel')
const internModel = require('../Models/InternModel')
const { isValidreqbody, isValid, isValidName, isValidMobile, isValidEmail } = require('../Validator/validation')

const createInterns = async function (req, res) {
    try {
        
        const { collegeName, name, mobile, email } = req.body

        const college = await collegeModel.findOne({ name: collegeName });
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

        const createdData = await internModel.create({ name, mobile, email, collegeID: college._id })
        return res.status(200).send({ data: createdData })

    } catch (error) {
        console.log(error)
        return res.status(500).send({ msg: error.message })
    }
} 

module.exports.createInterns = createInterns
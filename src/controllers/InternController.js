const collegeModel = require('../Models/CollegeModel')
const internModel = require('../Models/InternModel')
const { isValid, isValidName } = require('../Validator/validation')

const createInterns = async function (req, res) {
    const { name, mobile, email, collegeName } = req.body
    if (!collegeName) {
        return res.status(400).send({ status: false, msg: "collegeName can't be empty" })
    }
    try {
        const college = await collegeModel.findOne({ name: collegeName });
        if (!college) {
            return res.status(400).send({ status: false, msg: "College not found" })
        }

        if (!isValid(name)) {
            return res.status(400).send({ status: false, msg: "name can't be empty" })
        }
        if (!isValidName(name)) {
            return res.status(400).send({ status: false, msg: "please provide a valid name" })
        }
        if (!mobile) {
            return res.status(400).send({ status: false, msg: "mobile can't be empty" })
        }
        if (!email) {
            return res.status(400).send({ status: false, msg: "email can't be empty" })
        }

        const intern = await internModel.create({ name, mobile, email, collegeID: college._id })
        return res.status(200).send({ data: intern })
    } catch (error) {
        return res.status(500).send({ status: false, msg: "Something went wrong" })
    }
}

module.exports.createInterns = createInterns
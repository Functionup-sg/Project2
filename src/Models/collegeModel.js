const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({

    name: {type: String, required: true,unique: true},

    fullname: {type:String,required:true},

    logolink:  { type: String,required:true},

    isDeleted: {type: Boolean,default: false}
    
}, { timestamps: true });


module.exports = mongoose.model('college', collegeSchema);
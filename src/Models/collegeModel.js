const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({

    name: {type: String, required: true,unique: true},

    Fullname: {type:String,required:true},

    logolink:  { type: String,required:true},

    isDeleted: {type:boolean,default: false}
    
}, { timestamps: true });


module.exports = mongoose.model('college', collegeSchema);
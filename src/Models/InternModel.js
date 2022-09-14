const mongoose = require('mongoose');
const ObjectId =mongoose.Schema.Type.ObjectId

const internSchema = new mongoose.Schema({
    name: {type: String,required: true},

    email:{type:String,required:true,unique:true},

    mobile:{type:Number, unique:true, required:true},

    collage_Id:{type:ObjectId,ref:"college", required:true},

    isDeleted: {type: boolean, default: false}
    
}, { timestamps: true });


module.exports = mongoose.model('Intern', internSchema);
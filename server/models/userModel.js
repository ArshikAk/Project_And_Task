const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    empID : {
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNo : {
        type : Number,
        required : true,
        unique : true
    },
    role : {
        type : String,
        enum : ["user","admin"],
        default : "user"
    }
})


const userModel = mongoose.model("users",userSchema)

module.exports = userModel
const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["ongoing", "completed"],
        default : "ongoing"
    },
    to : {
        type : String,
        required : true
    }
})


const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },

    tasks : {
        type : [ taskSchema ],
        default : []
    }
})


const projectModel = mongoose.model("projects",projectSchema)

module.exports = projectModel
const projectModel = require("../models/projectModel")


exports.getProject = async (req,res) => {

    try {
        const {name} = req.params

        if(!name)
        {
            const data = await projectModel.find()
            return res.status(200).json(data)
        }

        const data = await projectModel.find({name : name})
        return res.status(200).json(data)
    }

    catch (err) {
        return res.status(500).json({message : err})
    }
    
}


exports.addProject = async (req,res) => {

    try {
        const {name} = req.body

        if (!name) 
            return res.status(401).json({message : "Name is a required field"})


        const newProject = new projectModel({name : name})

        await newProject.save()

        return res.status(200).json({message : "Project added successfully"})
    }

    catch (err) {

        return res.status(500).json({message : err})
    }

}


exports.updateProject = async (req,res) => {

    try {
        const {name, newName} = req.body

        if (!name) 
            return res.status(401).json({message : "Name is a required field"})


        projectModel.updateOne({name : name}, {name : newName})
        .then(() => {
            return res.status(200).json({message : "Project updated successfully"})
        })

        
    }

    catch (err) {

        return res.status(500).json({message : err})
    }

}


exports.deleteProject = async (req,res) => {

    try {
        const {name} = req.body

        if (!name) 
            return res.status(401).json({message : "Name is a required field"})


        projectModel.deleteOne({name : name})
        .then(() => {
            return res.status(200).json({message : "Project deleted successfully"})
        })

        
    }

    catch (err) {

        return res.status(500).json({message : err})
    }

}


exports.addTask = async (req,res) => {

    try {
        const {projectName , taskName , user} = req.body

        projectModel.updateOne({name : projectName}, {
            $push : {
                tasks : {name : taskName , to : user}
            }
        })
        .then(() => {
            return res.status(200).json({message : "Task added successfully"})
        })
    }

    catch (err) {

    }
}
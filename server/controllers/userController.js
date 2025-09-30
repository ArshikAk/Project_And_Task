const userModel = require("../models/userModel")

exports.addUser = async (req,res) => {
    try {

        const {name , empID, email, phoneNo } = req.body 

        if(!name || !empID || !email || !phoneNo)
            return res.status(401).json({message : "All fields are required"})

        const newUser = new userModel({name : name, empID : empID, email : email, phoneNo : phoneNo})

        await newUser.save()

        return res.status(200).json({message : "User added successfully"})
    }

    catch (err) {
        return res.status(500).json({message : "Error" , error : err.message})
    }
}
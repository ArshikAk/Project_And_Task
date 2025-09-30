const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next) => {

    try {

        const authHeader = req.headers["authorization"]
        const token = authHeader.split(" ")[1]

        if(!token) 
            return res.status(401).json({message : "Token is not found"})

        const decoded = jwt.verify(token,process.env.SECRET_KEY)

        if (decoded.role == 'admin')
            next()
        else
            return res.json({message : "Only admin can access"})
    }

    catch (err) {
        return res.status(500).json({message : err})
    }
}

module.exports = authMiddleware
const express = require("express")

const router = express.Router()

const { addProject, addTask, deleteProject, getProject, updateProject} = require("../controllers/projectController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/getProject/:name",getProject)
router.post("/addProject",addProject)
router.patch("/addTask",addTask)
router.patch("/updateProject",updateProject)
router.delete("/deleteProject",deleteProject)

module.exports = router;
const mongoose = require("mongoose")
const express = require("express")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/task2")
.then(() => {
    console.log("DB connected")
})

app.get("/",(req,res) => {
    res.send("Server is running")
})

app.use("/api/projects",require("./routes/projectRoute"))
app.use("/api/users",require("./routes/userRoute"))

app.listen(8000,() => {
    console.log("Server is running")
})
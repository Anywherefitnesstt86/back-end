const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const userRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router")
const classesRouter = require("./classes/classes-routers")

const server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use("/", authRouter)
server.use("/users", userRouter)
server.use("/classes", classesRouter)


server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our Fitness API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server
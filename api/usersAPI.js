const express = require('express')
const router = express.Router()
const userController = require('../controller/usersControler')

router.post("/adduser/",userController.addUser)

module.exports = router

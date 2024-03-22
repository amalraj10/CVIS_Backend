
const express = require('express')


const userController = require('../Controllers/userController')


const formController = require('../Controllers/formController')

const jwtMiddleware = require('../Middleware/jwtMiddleware')

const multerConfig = require('../Middleware/multerMiddleware')

const router = new express.Router()


router.post('/owner/register',userController.register)

router.post('/owner/login',userController.login)

router.put('/user/password',jwtMiddleware,userController.userPassword)

router.post('/register/add',jwtMiddleware,multerConfig.array('vattacthment'),formController.registervech)

router.get('/register/details',jwtMiddleware,formController.getallDetails)

module.exports = router
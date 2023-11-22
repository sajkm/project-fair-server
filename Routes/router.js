const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
//register 
router.post('/user/register',userController.register)

//login
router.post('/user/login',userController.login)

//add-project
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

//getuserprojects
router.get('/user/all-projects',jwtMiddleware,projectController.allUserProjects)

//getallprojects
router.get('/projects/all',jwtMiddleware,projectController.getallProjects)

//gethomeprojects
router.get('/projects/home-projects',projectController.getHomeProjects)

//export router
module.exports=router
const express = require('express')
const router = express.Router()
const indexjsControllers = require("../controllers/index")
router.get('/index',indexjsControllers.test1)
router.delete('/index/:id',indexjsControllers.test2)

router.get('/index/:id',indexjsControllers.test3)

router.post('/index', indexjsControllers.test4 ) 
module.exports = router

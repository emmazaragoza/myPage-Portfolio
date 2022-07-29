const router = require('express').Router()
const loginService = require('../service/login.js')
const loginSer = new loginService()


router.post('/', async ( req, res) => {
   const dataLoginService = await loginSer.createUser(req.body)
   return res.json(dataLoginService)
})


module.exports = router
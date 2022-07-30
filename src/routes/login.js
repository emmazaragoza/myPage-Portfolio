const router = require('express').Router()
const loginService = require('../service/login.js')
const loginSer = new loginService()

router.post('/',async (req, res) =>{
   try {
      const dataSer = await loginSer.postLogin(req.body)
      return res.json(dataSer)
   } catch (error) {
      return res.json({
         error: true,
         message: error.message,
         origin: "Desde postLogin"
      })
   }
})

//! Login,
router.post('/login', async (req, res) => {
   try {
      const {email, password, secretword} = req.body
      if(email && password && secretword) {
         const dataHash = await loginSer.loginPost(req.body)
         return res.json(dataHash)
      }else{
         return res.json({
            message: 'error al inicar secion'
         })
      }
   } catch (error) {
      return res.json({
         error: true,
         message: error.message,
         origin: "Desde loginPost routes"
      })
   }
})



module.exports = router
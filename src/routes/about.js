const router = require('express').Router()
const aboutService = require('../service/aboutMe.js')
const aboutMeSer = new aboutService()

router.post('/', async(req, res) => {
    try {
        const dataAbout = await aboutMeSer.createUser(req.body)
        return res.json(dataAbout) 
    } catch (error) {
        return res.json({
            error: true,
            message: error.message,
            origin: 'Desde createUser routes'
        })
    }
    
})

router.post('/modify', async(req, res) => {
    try {
        const data = await aboutMeSer.modifyUser(req.body)
        return res.json(data)
    } catch (error) {
        return res.json({
            error: true,
            message: error.message,
            origin: 'Desde modifyUser routes'
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await aboutMeSer.getUser()
        return res.json(data)
    } catch (error) {
        return res.json({
            error: true,
            message: error.message,
            origin: 'Desde getUser routes'
        })
    }
})


module.exports = router
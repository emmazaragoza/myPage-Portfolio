const router = require('express').Router()
const projectsServices = require('../service/projects.js')
const projectsServis = new projectsServices()

router.post('/', async (req, res) => {
    try {

    } catch (error) {
        return res.json({
            error: true,
            message: error.message,
            origin: 'Desde crearProjects routes'
        })
    }
})

module.exports = router
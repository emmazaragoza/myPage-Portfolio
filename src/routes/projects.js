const router = require('express').Router()
const projectsServices = require('../service/projects.js')
const projectsServis = new projectsServices()
const tokenVerification = require('../middleware/tokenVerification.js')

router.post('/', tokenVerification, async (req, res) => {
    try {
        const data = await projectsServis.createProjects(req.body)
        return res.json(data)
    } catch (error) {
        return res.json({
            error: true,
            message: error.message,
            origin: 'Desde crearteProjects routes'
        })
    }
})

router.post('/modify', tokenVerification, async (req, res) => {
    try {
        if(req.body._id){
            const dataUp = await projectsServis.modifyProjects(req.body)
            return res.json(dataUp)
        }else{
            return res.json({
                message: "No se puede encontar el proyecto"
            })
        }
    } catch (error) {
        return res.json({
            error: true,
            message: error.message,
            origin: "Desde modofyProjects routes"
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const dataGet = await projectsServis.getProjects()
        return res.json(dataGet)
    } catch (error) {
        return res.json({
            error: true,
            message: error.message,
            origin: 'Desde getProjects routes'
        })
    }
})

router.delete('/', tokenVerification, async (req, res) => {
    try {
        if(req.body._id){
            const dataDelete = await projectsServis.deleteProjects(req.body._id)
            return res.json(dataDelete)
        }else{
            return res.json({message: 'fatla info para poder continuar'})
        }
    } catch (error) {
        return res.json({
            error: true,
            message: error.message,
            origin: 'Desde deleteProjects routes'
        })
    }
})

module.exports = router
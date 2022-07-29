const {Schema, model} = require('mongoose')

const projectsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        requiered: true,
    },
    imagen:{
        type: String,
        requiered: true,
    },
    films:{
        type: String,
    },
    githud:{
        type: String,
        required: true,
    },
    
})

module.exports = model('projectschema', projectsSchema)
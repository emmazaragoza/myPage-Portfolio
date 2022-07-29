const {Schema, model} = require('mongoose')

const AboutMeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    user:{
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    linkedin:{
        type: String,
        requiered: true,
    },
    github:{
        type: String,
        required: true,
    },
    cvpdf:{
        type: String,
        requiered: true
    },
    cvimg:{
        type: String,
        requiered: true
    },
    imagen: {
        type: String,
        requiered: true
    },
    description: {
        type: String,
        requiered: true
    },
    status:{
        type: String,
        enum: ["Trabajando", "Busqueda Activa", "Estudiando"],
        required: true
    },
})

module.exports = model('aboutmeschema', AboutMeSchema)
const aboutMeModel = require('../models/aboutMe.js')

class About{
    async createUser(data){
        try {
            const dataModel = await aboutMeModel.find()
            if(dataModel.length === 0){
                let dataModel = await aboutMeModel.create({
                    name: data.name,
                    user: `${data.name} ${data.lastname}`,
                    lastname: data.lastname,
                    email: data.email,
                    linkedin: data.linkedin,
                    github: data.github,
                    cvpdf: data.cvpdf,
                    cvimg: data.cvimg,
                    imagen: data.imagen,
                    description: data.description,
                    status: data.status,
                })
                return dataModel.save()
            }else{
                return{
                    message: 'No tiene los permisos para crear otro usuario ;)'
                }
            }
        } catch (error) {
            return {
                error: true,
                message: error.message,
                origin: 'Desde createUser service'
            }
        }
    }

    async modifyUser(data){
        try {
            let upData = {
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                linkedin: data.linkedin,
                github: data.github,
                cvpdf: data.cvpdf,
                cvimg: data.cvimg,
                imagen: data.imagen,
                description: data.description,
                status: data.status,
            }
            const dataModelUp = await aboutMeModel.findByIdAndUpdate(data._id, upData, {new: true})
            return dataModelUp
        } catch (error) {
            return {
                error: true,
                message: error.message,
                origin: 'Desde modifyUser service'
            }
        }
    }

    async getUser(){
        try {
            const user = await aboutMeModel.find()
            if(user.length !== 0){
                return user
            }else{ 
                return {
                    message: 'No se encontro al usuario, algo anda mal :)'
                }
            }
        } catch (error) {
            return {
                error: true,
                messge: error.message,
                origin: 'Desde getUser service'
            }
        }
    }

//! Fin de la class
}

module.exports = About
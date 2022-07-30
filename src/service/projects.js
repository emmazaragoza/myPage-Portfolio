const projectModel = require('../models/projects.js')

class Projects {
    async createProjects(data){
        try {
            const crearProjects = await projectModel.create({
                title: data.title,
                description: data.description,
                imagen: data.imagen,
                films: data.films,
                githud: data.githud,
            })
            return crearProjects.save()
        } catch (error) {
            return {
                error: true,
                message: error.message,
                origin: 'Desde createProjecs service'
            }
        }
    }

    async modifyProjects(data){
        try {
            let dataUp = {
                title: data.title,
                description: data.description,
                imagen: data.imagen,
                films: data.films,
                githud: data.githud,
            }
            const dataModel = await projectModel.findByIdAndUpdate(data._id, dataUp, {new: true})
            return dataModel
        } catch (error) {
            return {
                error: true,
                message: error.message,
                origin: 'Desde modifyProjects service'
            }
        }
    }

    async getProjects(){
        try {
            const dataModel = await projectModel.find()
            if(dataModel.length !== 0){
                return {
                    dataModel,
                    count: dataModel.length
                }
            }else{
                return {message: 'No se encotraron proyectos'}
            }
        } catch (error) {
            return {
                error: true,
                message: error.message,
                origin: "Desde getProjects service"
            }
        }
    }

    async deleteProjects(_id){
        try {
            const dataModelDelete = await projectModel.findByIdAndDelete(_id)
            if(dataModelDelete.length !== 0){
                return {message: "El proyecto se elimino correctamente"}
            }else{
                return {message: "No se ha encontrado la informacion"}
            }
        } catch (error) {
            return {
                error: true,
                message: error.message,
                origin: "Desde deleteProjects service"
            }
        }
    }

//! Fin de la class
}

module.exports = Projects
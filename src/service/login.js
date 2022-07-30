const loginModel = require('../models/login.js')
const {hashData, verifyData} = require('../middleware/passwordhash.js')
const createToken = require('../middleware/tokenCreate.js')

class Login{
    async postLogin(data){
        try {
            const dataModel = await loginModel.find()
            if(dataModel.length !== 0){
                return {message: "ya hay un registro"}
            }else{
                const contra = await hashData(data.password)
                const word = await hashData(data.secretword)
                const dataCrear = await loginModel.create({
                    email: data.email,
                    password: contra,
                    secretword: word,
                    admin: true,
                })
                return dataCrear.save()
            }
        } catch (error) {
            return {
                error: true,
                message: error.message,
                origin: "Desde postLogin service"
            }
        }
    
    }

    async loginPost(data){
        try {
            const dataModel = await loginModel.find({email: data.email})
            let password
            let secretword
            let _id
            dataModel.map(c => {
                password = c.password;
                secretword = c.secretword
                _id = c._id
            })
            if(dataModel.length !== 0){
                const passwordhash = await verifyData(data.password, password, data.secretword, secretword)
                if(passwordhash){
                    let name = 'Emmanuel'
                    let token = await createToken(data.email, name, _id)
                    return token
                }else{
                    return {
                        message: 'Acceso denegado'
                    }
                }
            }
        } catch (error) {
            return {
                error: true,
                message: error.message,
                origin: 'Desde loginPost service'
            }
        }
    }

//! Fin de la class
}

module.exports = Login
const jwt = require('jsonwebtoken')
const {SECRETKEY} = process.env

const tokenCreate = async (email, name, _id) => {
    try {
        if(email && name && _id){
            let dataToken = {
                name: name,
                email: email,
                id: _id,
                origin: "elmejorportfolio"
            }
            let token = await jwt.sign(dataToken, SECRETKEY, {
                expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hora
            })
            let data = {
                    name: dataToken.name,
                    email: dataToken.email
                }
            return req = {
                data,
                token
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message,
            origin: "Desde tokenCreate Middleware"
        }
    }
}

module.exports = tokenCreate

const jwt = require('jsonwebtoken')
const {SECRETKEY} = process.env

const tokenVerification = async (req, res, next) => {
    const bearerHeader = req.headers
    try {
        if(bearerHeader){
            const token = bearerHeader.token;
            if(token){
                const decode = jwt.verify(token, SECRETKEY)
                req = decode
                return next()
            }else{
                return {
                    message: "Acceso denegado, Token Invalido"
                }
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message,
            origin: "Desde tokenVerification"
        }
    }
    //! Si falla todo,
    return res.status(403).json({
        error: true,
        message: "Permisos insuficientes"
    })
}

module.exports = tokenVerification

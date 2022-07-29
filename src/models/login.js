const {Schema, model} = require('mongoose')

const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        requried: true,
    },
    secretword: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: null
    },
});

module.exports = model('loginschema', loginSchema)
const server = require('express').Router()

const login = require('./login.js')
const about = require('./about.js')
const projects = require('./projects.js')

server.use('/login', login)
server.use('/about', about)
server.use('/projects', projects)

module.exports = server